const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  products: {
    type: [
      {
        _id: false,
        prod_id: {
            type: mongoose.Schema.Types.ObjectId,
          // type: Number,
            ref: "Product",
          required: true,
        },
      
      },
    ],
  },
  total_price: {
    type: Number,
  },
  user_id: {
    type: Number,
  },
});
const Cart_item = mongoose.model("cartitem", cartSchema);

module.exports = Cart_item;
