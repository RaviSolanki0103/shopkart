const { DATA_INSERT_MESSAGE, DATA_INSERT_FAILD } = require("../config/responsemessage");
const { CREATED, BAD_REQUEST } = require("../config/statuscode");
const responseData = require("../helper/response");
const User = require("../models/user");

//registration user
exports.registerUser = async (req, res, next) => {
    await User.create(req.body).then((result) =>
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

//login user
// exports.loginUser = async (req, res, next) => {
//     const email = req.body.email;
//     const password = req.body.password;
//     await User.findOne(email, password).then((result) =>{

//     })
// };
