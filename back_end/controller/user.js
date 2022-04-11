var nodemailer = require('nodemailer');
const { DATA_INSERT_MESSAGE, DATA_INSERT_FAILD, INVALID_LOGIN, LOGIN_SUCCESS, INVALID_LOGIN_CREDENTIAL, DATA_FETCH_MESSAGE } = require("../config/responsemessage");
const { CREATED, BAD_REQUEST, SUCCESS, NOT_FOUND } = require("../config/statuscode");
const responseData = require("../helper/response");
const User = require("../models/user");
const Otp = require("../models/otp");
const jwt = require("jsonwebtoken")

const bcrypt = require("bcryptjs");

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
exports.loginUser = async (req, res, next) => {
    const email = req.query.email;
    const password = req.query.password;

    const user = await User.findOne({email});
    if(user) {
      const isMatch = await bcrypt.compare(password, user.password);
      if(isMatch) {
        const token = jwt.sign({ _id: user._id }, process.env.SECRET_KEY, {
          expiresIn: process.env.EXPIRE_TIME,
        });
        responseData({
          res,
          status: SUCCESS,
          message: LOGIN_SUCCESS,
          result: {token},
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
  await User.findById(req.userId).then(result=>responseData({
    res,
    status: SUCCESS,
    message: DATA_FETCH_MESSAGE,
    result
  })).catch(err=>  responseData({
    res,
    status: NOT_FOUND,
    message: err.message,
  }));
}

//forgot password
exports.emailSend = async (req, res, next) => {
  console.log("email sendcalled");
  const useremail=req.body.email
  const data =  await User.findOne({email:useremail});
  console.log(data,"okookoko");
    //  User.findOne({email:useremail}) 
  const response = {};
  if(data !== null){
    const otpcode = Math.floor((Math.random()*10000)+1);
    const otpData = new Otp({
      email:req.body.email,
      code: otpcode,
      expireIn: new Date(). getTime() + 300*1000
    })
    const otpResponse = await otpData.save();

    // send mail 
    var transporter = nodemailer.createTransport({
     
      service: 'gmail',
      auth: {
        user: '',
        pass: ''
      }
    });       
    
    var mailOptions = {
      from: 'ronakc.itpath@gmail.com',
      to: 'ronaldt.itpath@gmail.com',
      subject: 'otp for forgot password',
      text: `This is your reset password  code ${otpcode} `
    };
    res.send("ok")
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    
    });


//-------------------------------


    response.statusText = "success"
    response.message= "Please check your Email ID";
  }else{
    console.log("else");
    response.statusText = "error"
    response.message= "Email ID does not exist";
    res.send(" errror")
  }

  
};

exports.changePassword = async (req, res, next) => {
  res.status(200).json("okay");
};




