const mongoose = require('mongoose');

const otpSchema = new mongoose.Schema({
    email: String,
    code: String,
    expireIn:Number
})

const otp = mongoose.model('otp',otpSchema);

module.exports = otp;