const { default: mongoose } = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
const aggregatePaginate = require("mongoose-aggregate-paginate-v2");
const { ORDER_STATUS, TIME_STAMP } = require("../helper/reusabledata");
const orderSchema = mongoose.Schema(
  {
    products: {
      type: [
        {
          _id: false,
          prod_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
            required: true,
          },
          price: {
            type: Number,
            required: true,
          },
          color: {
            type: String,
            required: true,
          },
          size: {
            type: String,
            required: true,
          },
        },
      ],
    },
    total_price: {
      type: Number,
    },
    status: {
      type: String,
      enum: ORDER_STATUS,
      default: "Ordered",
    },
  },
  TIME_STAMP
);

orderSchema.plugin(mongoosePaginate);
orderSchema.plugin(aggregatePaginate);

module.exports = mongoose.model("Order", orderSchema);
