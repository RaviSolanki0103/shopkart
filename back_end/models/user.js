const validator = require('validator');
const jwt = require("jsonwebtoken")
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  fname: {
    type: 'String',
    required: true,
    minlength: 3,
  },
  lname: {
    type: 'String',
    required: true,
    minlength: 3,
  },
  gender: {
    type: 'String',
    enum: ["male", "female"],
    
  },
  email: {
    type: String,
    required: true,
    unique: [true, "Email id already present!!"],
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid email!!")
      }
    }
  },
  phone: {
    type: Number,
    required: true,
    min: 10,
    unique: true
  },
  password: {
    type: String,
    required: true,
  },
  addresses: {
    type: [{
      _id: false,
      name: {
        type: 'String',
        required: true,
      },
      email: {
        type: 'String',
        required: true,
       
      },
      mobile: {
        type: Number,
        required: true,
        min: 10,
      },
      address: {
        type: 'String',
        required: true,
      },
      pincode: {
        type: 'Number',
        required: true,
      }
    }],
  },
});

/**
 * userSchema.pre('save') // Here function will run before "save" function in "auth.js"
 */

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    console.log("Hiii from inside");
    this.password = await bcrypt.hash(this.password, 12);
  }
  next();
});

// We are generating token
userSchema.methods.generateAuthToken = async function () {
  try {
    let mytoken = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
    localStorage.setItem("token", mytoken);
  } catch (error) {
    console.log(error);
  }
}

module.exports = mongoose.model("User", userSchema);
