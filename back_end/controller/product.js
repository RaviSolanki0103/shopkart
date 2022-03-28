const {
  DATA_INSERT_MESSAGE,
  DATA_INSERT_FAILD,
  DATA_NOT_FOUND,
  DATA_FETCH_MESSAGE,
} = require("../config/responsemessage");
const { CREATED, BAD_REQUEST, SUCCESS } = require("../config/statuscode");
const responseData = require("../helper/response");
const Category = require("../models/category");
const Product = require("../models/product");

exports.addProduct = async (req, res, next) => {
  const category = await Category.findById(req.body.category);

  const product = new Product({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    stock: req.body.stock,
    warranty: req.body.warranty,
    seller: req.body.seller,
    category: category._id,
    product_img: req.file.originalname,
  });
  await product
    .save()
    .then((result) => {
      category.products.push(product);
      category.save();
      return responseData({
        res,
        status: CREATED,
        message: DATA_INSERT_MESSAGE,
        result,
      });
    })
    .catch((err) => {
      responseData({
        res,
        status: BAD_REQUEST,
        message: DATA_INSERT_FAILD,
        result: err,
      });
    });
};

exports.getCategoryProduct = async (req, res, next) => {
  const _page = req.query._page || 1;
  const _limit = req.query._limit || 5;
  const _name = req.query._name || "";
  const categoryId = req.query.cat_id;

  const options = {
    page: _page,
    limit: _limit,
    populate: { path: "category", select: { name: 1, _id: 0 } },
    collation: {
      locale: "en",
    },
  };

  // const searchPattern =
  //   _name.trim().length !== 0 ? { "name": _name } : {};

  let searchPattern = {};
  if (_name && _name.trim().length !== 0) {
    searchPattern["name"] = { $regex: _name, $options: "i" };
  }
  if (categoryId && categoryId !== "") {
    searchPattern["category"] = categoryId;
  }

  await Product.paginate(searchPattern, options)
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
      responseData({
        res,
        status: BAD_REQUEST,
        message: DATA_NOT_FOUND,
        result: err,
      });
    });
};
