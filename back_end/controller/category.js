const {
  DATA_INSERT_MESSAGE,
  DATA_INSERT_FAILD,
  DATA_NOT_FOUND,
  DATA_FETCH_MESSAGE,
} = require("../config/responsemessage");
const responseData = require("../helper/response");
const Category = require("../models/category");

exports.addCategory = async (req, res, next) => {
  const category = await Category.create(req.body);
  category
    .save()
    .then((result) =>
      responseData({
        res,
        status: 201,
        message: DATA_INSERT_MESSAGE,
        result,
      })
    )
    .catch((err) => {
      responseData({
        res,
        status: 400,
        message: DATA_INSERT_FAILD,
        result: err,
      });
    });
};

exports.getCategory = async (req, res, next) => {
  await Category.find({})
    .then((result) =>
      responseData({
        res,
        status: 201,
        message: DATA_FETCH_MESSAGE,
        result,
      })
    )
    .catch((err) => {
      responseData({
        res,
        status: 400,
        message: DATA_NOT_FOUND,
        result: err,
      });
    });
};

exports.getSingleCategory = async (req, res, next) => {
  await Category.findById(req.params._id)
    .then((result) => {
      if (result.length !== 0) {
        responseData({
          res,
          status: 200,
          message: DATA_FETCH_MESSAGE,
          result,
        });
      } else {
        responseData({
          res,
          status: 200,
          message: DATA_NOT_FOUND,
        });
      }
    })
    .catch((err) => responseData({ res, status: 400, message: err }));
};
