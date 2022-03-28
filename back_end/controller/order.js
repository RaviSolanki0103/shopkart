const {
  DATA_FETCH_MESSAGE,
  DATA_NOT_FOUND,
  DATA_INSERT_MESSAGE,
  DATA_INSERT_FAILD,
} = require("../config/responsemessage");
const responseData = require("../helper/response");
const ORDER_STATUS = require("../helper/reusabledata");
const mongoose = require("mongoose");
const Order = require("../models/order");
const { SUCCESS, BAD_REQUEST, CREATED } = require("../config/statuscode");

// get orders
exports.getOrder = async (req, res, next) => {
  const _page = req.query._page || 1;
  const _limit = req.query._limit || 5;
  const _status = req.query._status || null;
  const _name = req.query._name || "";
  // const userId = req.id;

  const options = {
    page: _page,
    limit: _limit,
  };

  let searchPattern = {
    // userId:mongoose.Schema.Types.ObjectId(userId)
  };
  queryPattern = [];

  if (_status && _status !== "") {
    searchPattern["status"] = _status;
  }

  queryPattern.push({ $match: searchPattern });
  queryPattern.push({
    $lookup: {
      from: "products",
      localField: "products.prod_id",
      foreignField: "_id",
      pipeline: [
        {
          $project: {
            name: 1,
            seller: 1,
            product_img: 1,
          },
        },
      ],
      as: "product_details",
    },
  });

  if (_name && _name !== "") {
    queryPattern.push({
      $match: {
        "product_details.name": { $regex: _name, $options: "i" },
      },
    });
  }

  queryPattern.push({
    $addFields: {
      products: {
        $map: {
          input: "$products",
          in: {
            $mergeObjects: [
              "$$this",
              {
                $arrayElemAt: [
                  "$product_details",
                  { $indexOfArray: ["$product_details._id", "$$this.prod_id"] },
                ],
              },
            ],
          },
        },
      },
    },
  });

  queryPattern.push({
    $project: { product_details: 0, "products.prod_id": 0 },
  });

  const queryData = Order.aggregate(queryPattern);
  Order.aggregatePaginate(queryData, options)
    .then((result) => {
      if (result.length !== 0) {
        responseData({
          res,
          status: SUCCESS,
          message: DATA_FETCH_MESSAGE,
          result,
        });
      } else {
        responseData({
          res,
          status: SUCCESS,
          message: DATA_NOT_FOUND,
        });
      }
    })
    .catch((err) => {
      responseData({ res, status: BAD_REQUEST, message: err });
    });
};

// get single order
exports.getSingleOrder = async (req, res, next) => {
  await Order.find({ _id: req.params._id })
    .then((result) => {
      if (result.length !== 0) {
        responseData({
          res,
          status: SUCCESS,
          message: DATA_FETCH_MESSAGE,
          result,
        });
      } else {
        responseData({
          res,
          status: SUCCESS,
          message: DATA_NOT_FOUND,
        });
      }
    })
    .catch((err) =>
      responseData({ res, status: BAD_REQUEST, message: DATA_NOT_FOUND })
    );
};

// add orders
exports.addOrder = async (req, res, next) => {
  let totalPrice = 0;
  req.body.map((product) => {
    totalPrice += product.price;
  });
  const orderStatusLength = ORDER_STATUS.length;
  let status =
    ORDER_STATUS[
      Math.round(Math.random(0, orderStatusLength) * orderStatusLength)
    ];

  Order.create({
    products: req.body,
    total_price: totalPrice,
    status,
  })
    .then((result) =>
      responseData({
        res,
        status: CREATED,
        message: DATA_INSERT_MESSAGE,
        result,
      })
    )
    .catch((err) => {
      responseData({
        res,
        status: BAD_REQUEST,
        message: DATA_INSERT_FAILD,
        result: err,
      });
    });
};
