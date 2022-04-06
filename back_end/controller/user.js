const {
  DATA_INSERT_MESSAGE,
  DATA_INSERT_FAILD,
  INVALID_LOGIN,
  LOGIN_SUCCESS,
  INVALID_LOGIN_CREDENTIAL,
  DATA_FETCH_MESSAGE,
  DATA_UPDATE_MESSAGE,
  DATA_UPDATE_FAILED,
} = require("../config/responsemessage");
const {
  CREATED,
  BAD_REQUEST,
  SUCCESS,
  NOT_FOUND,
} = require("../config/statuscode");
const responseData = require("../helper/response");
const User = require("../models/user");
const Otp = require("../models/otp");
const jwt = require("jsonwebtoken");

const bcrypt = require("bcryptjs");

//registration user
exports.registerUser = async (req, res, next) => {
await User.create(req.body)
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

//login user
exports.loginUser = async (req, res, next) => {
  const email = req.query.email;
  const password = req.query.password;

  const user = await User.findOne({ email });
  if (user) {
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      const token = jwt.sign({ _id: user._id }, process.env.SECRET_KEY, {
        expiresIn: process.env.EXPIRE_TIME,
      });
      responseData({
        res,
        status: SUCCESS,
        message: LOGIN_SUCCESS,
        result: { token },
      });
    } else {
      responseData({
        res,
        status: BAD_REQUEST,
        message: INVALID_LOGIN,
      });
    }
  } else {
    responseData({
      res,
      status: NOT_FOUND,
      message: INVALID_LOGIN_CREDENTIAL,
    });
  }
};

exports.getUserById = async (req, res, next) => {
  // console.log("user id: ",req.userId);
  await User.findById(req.userId)
    .then((result) =>
      responseData({
        res,
        status: SUCCESS,
        message: DATA_FETCH_MESSAGE,
        result,
      })
    )
    .catch((err) =>
      responseData({
        res,
        status: NOT_FOUND,
        message: err.message,
      })
    );
};

//update user
exports.updateUser = async (req, res, next) => {
  await User.findByIdAndUpdate(req.userId, req.body, {
    returnNewDocument: true,
  })
    .then((result) =>
      responseData({
        res,
        status: SUCCESS,
        message: DATA_UPDATE_MESSAGE,
        result,
      })
    )
    .catch((err) =>
      responseData({
        res,
        status: DATA_UPDATE_FAILED,
        message: err.message,
      })
    );
};

//update address
exports.updateAddress = async (req, res, next) => {
  await User.findByIdAndUpdate(req.userId, req.body, {
    returnNewDocument: true,
  })
    .then((result) =>
      responseData({
        res,
        status: SUCCESS,
        message: DATA_UPDATE_MESSAGE,
        result,
      })
    )
    .catch((err) =>
      responseData({
        res,
        status: DATA_UPDATE_FAILED,
        message: err.message,
      })
    );
};

//delete address
exports.getUserAddById = async (req, res, next) => {
  console.log("user id: ",req.userId);
  await User.findById(req.userId)
 
    .then((result) =>
      responseData({
        res,
        status: SUCCESS,
        message: DELETE_ADDRESS,
        result,
      })
    )
    .catch((err) =>
      responseData({
        res,
        status: NOT_FOUND,
        message: err.message,
      })
    );
};
// exports.deleteAddress = async (req, res, next) => {
//   await User.findOneAndDelete(req.userId, req.body, {
//   })
//     .then((result) =>
//       responseData({
//         res,
//         status: SUCCESS,
//         message: DELETE_ADDRESS,
//         result,
//       })
//     )
//     .catch((err) =>
//       responseData({
//         res,
//         status: NOT_FOUND,
//         message: err.message,
//       })
//     );
// };


//forgot password
exports.emailSend = async (req, res, next) => {
  const data = await User.findOne({ email });
  const response = {};
  if (data) {
    const otpcode = Math.floor(Math.random() * 10000 + 1);
    const otpData = new Otp({
      email: req.body.email,
      code: otpcode,
      expireIn: new Date().getTime() + 300 * 1000,
    });
    const otpResponse = await otpData.save();
    response.statusText = "success";
    response.message = "Please check your Email ID";
  } else {
    response.statusText = "error";
    response.message = "Email ID does not exist";
  }
};

exports.changePassword = async (req, res, next) => {
  res.status(200).json("okay");
};
