const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  product_id:{
    type: mongoose.Schema.Types.ObjectId,
        ref: "Product", // collection name
        required:true
  } ,
  quantity:{
     type:Number,
     required:false
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
        ref: "USER", // collection name
        required:true
  },
});
const Cart_item = mongoose.model("cartitem", cartSchema);

module.exports = Cart_item;


