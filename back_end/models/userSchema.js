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
    required: true,
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
        validate(value) {
          if (!validator.isEmail(value)) {
            throw new Error("Invalid email")
          }
        }
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
  tokens: [
    {
      token: {
        type: String,
        required: true
      }
    }
  ],
  userdata: {
    type: String,
  },
});

/**
 * userSchema.pre('save') // Here function will run before "save" function in "auth.js"
 */

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    console.log("Hiii from inside");
    this.password = await bcrypt.hash(this.password, 12);
    this.cpassword = await bcrypt.hash(this.cpassword, 12);
  }
  next();
});

// We are generating token
userSchema.methods.generateAuthToken = async function () {
  try {
    let mytoken = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
    this.tokens = this.tokens.concat({ token: mytoken });
    await this.save();
    return mytoken;
  } catch (error) {
    console.log(error);
  }
}

const User = mongoose.model("USER", userSchema); // USER is collection name in database

module.exports = User;
