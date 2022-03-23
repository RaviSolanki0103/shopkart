const Product = require("../model/product");

exports.createProduct = async (req, res, next) => {
  const product = await Product.create(req.body);
  res.status(201).json({
      succecc:true
  })
  next();
};
