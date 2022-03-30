const jwt = require("jsonwebtoken");
const { UNAUTHORIZED } = require("../config/statuscode");
const responseData = require("../helper/response");

module.exports = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const verifyToken = jwt.verify(token.split(" ")[1], process.env.SECRET_KEY);
    // console.log("ALL token data", token, verifyToken);
    req.userId = verifyToken._id;
    next();
  } catch (err) {
    responseData({
      res,
      status: UNAUTHORIZED,
      message: err,
    });
  }
};
