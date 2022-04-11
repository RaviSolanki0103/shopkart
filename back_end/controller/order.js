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

const {
  SUCCESS,
  BAD_REQUEST,
  CREATED,
  NOT_FOUND,
} = require("../config/statuscode");

// get orders
exports.getOrder = async (req, res, next) => {
  const _page = req.query._page || 1;
  const _limit = req.query._limit || 2;
  const _status = req.query._status || null;
  const _name = req.query._name || "";
  const userId = req.userId;
  // console.log(userId);
  const options = {
    page: _page,
    limit: _limit,
  };

  let searchPattern = {
    user: mongoose.Types.ObjectId(userId),
  };
  let queryPattern = [];

  if (_status && _status !== "") {
    searchPattern["status"] = { $in: _status };
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
          status: NOT_FOUND,
          message: DATA_NOT_FOUND,
        });
      }
    })
    .catch((err) => {
      responseData({ res, status: BAD_REQUEST, message: err.message });
    });
};

// add orders
exports. addOrder = async (req, res, next) => {
  let totalPrice = 0;
  req.body.products.map((product) => {
    totalPrice += product.price;
  });
  const orderStatusLength = ORDER_STATUS.length;
  let status =
    ORDER_STATUS[
      Math.round(Math.random(0, orderStatusLength) * orderStatusLength)
    ];
  Order.create({
    products: req.body.products,
    total_price: totalPrice,
    status,
    user: req.userId,
    delivery_info: req.body.delivery_info,
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
