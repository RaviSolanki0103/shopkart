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
  warranty: {
    type: Number,
    required: [true, "Please enter Warranty Period"],
    maxLength: [3, "Warranty cannot exceed 3 characters"],
  },
  seller: {
    type: String,
    required: [true, "Please enter seller"],
  },
  color: {
    type: Array,
    required: [true, "Please enter Colors"],
  },
  size: {
    type: Array,
    required: [true, "Please enter Size"],
  },
  category: {
    type: String,
    required: [true, "Please enter category"],
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
