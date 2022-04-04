const {
  DATA_INSERT_MESSAGE,
  DATA_INSERT_FAILD,
  DATA_NOT_FOUND,
  DATA_FETCH_MESSAGE,
} = require("../config/responsemessage");
const { CREATED, SUCCESS, BAD_REQUEST } = require("../config/statuscode");
const responseData = require("../helper/response");
const Wishlist = require("../models/wishlist");

exports.getWishlist = async (req, res) => {
  await Wishlist.find({ user_id: req.userId })
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

exports.addWishlist = async (req, res) => {
  const { product_id } = req.body;
  const user_id = req.userId;
  const wishlist_item = new Wishlist({ user_id, product_id });
  await wishlist_item
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

exports.deleteWishlist =async (req, res) => {
    const pro_id = req.params.id;
    console.log(req.params.id, "----------123--------");
    Wishlist.deleteOne({ product_id: pro_id }, function (err) {
      if (err) console.log(err);
      console.log("Successful deletion");
    })
  }