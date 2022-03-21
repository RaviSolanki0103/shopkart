const { default: mongoose } = require("mongoose");
const mongoos = require("mongoose");

const productSchema = mongoos.Schema({
  name: {
    type: String,
    required: [true, "Please enter product Name"],
  },
  description: {
    type: String,
    required: [true, "Please Enter product Description"],
  },
  price: {
    type: Number,
    required: [true, "Please enter product price"],
    maxLength: [5, "Price cannot exceed 8 characters"],
  },
  stock: {
    type: Number,
    required: [true, "Please enter stock"],
    maxLength: [3, "Stock cannot exceed 3 characters"],
  },
  product_img: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("PRODUCT", productSchema);
