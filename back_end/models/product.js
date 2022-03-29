const { default: mongoose } = require("mongoose");
const mongoos = require("mongoose");

const mongoosePaginate = require("mongoose-paginate-v2");

const productSchema = mongoose.Schema({
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
<<<<<<< HEAD
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
=======
  color: {
    type: Array,
    required: [true, "Please enter Colors"],
  },
  size: {
    type: Array,
    required: [true, "Please enter Size"],
>>>>>>> df1120ac0fa6d469220ca6390067c87e601090e4
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

productSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("Product", productSchema);
