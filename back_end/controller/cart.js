const {
  DATA_INSERT_MESSAGE,
  DATA_INSERT_FAILD,
  DATA_NOT_FOUND,
  DATA_FETCH_MESSAGE,
} = require("../config/responsemessage");
const { CREATED, SUCCESS, BAD_REQUEST } = require("../config/statuscode");
const responseData = require("../helper/response");
const Cart_item = require("../models/cart");

exports.getCart = async (req, res) => {
  console.log(req.userId, "+_+_");
  await Cart_item.find({ user_id: req.userId })
    .populate(["product_id"])
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

exports.addCart = async (req, res) => {
  console.log("ADD CART CALLED");

  const { product_id, quantity } = req.body;
  const userId = req.userId;
  console.log(product_id, quantity, userId, "____");
  const cart_item = new Cart_item({ product_id, quantity, userId });
  const add_to_cart = cart_item
    .save()
    .then((result) => {
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
