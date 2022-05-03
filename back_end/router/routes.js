const express = require("express");
const router = express.Router();
const controller = require("../controller");
const middleware = require("../middleware/auth");
const upload = require("../config/multerconfig");
const Wishlist = require("../models/wishlist");
const Cart_item = require("../models/cart");
const User = require("../models/user");
const otp = require("../models/otp");

// registration routes
router.post("/user", controller.user.registerUser);
router.get("/user", middleware, controller.user.getUserById);
router.get("/loginUser", controller.user.loginUser);
router.post("/emailSend", controller.user.emailSend);
router.post("/changePassword", controller.user.changePassword);

// order routes
router.get("/orders", middleware, controller.order.getOrder);
router.post("/orders", middleware, controller.order.addOrder);

// category routes
router.post("/categories", middleware, controller.category.addCategory);
router.get("/categories", middleware, controller.category.getCategory);
router.get(
  "/categories/:_id",
  middleware,
  controller.category.getSingleCategory
);

// Wishlist
router.get("/wishlist", middleware, controller.wishlist.getWishlist);
router.post("/wishlist", middleware, controller.wishlist.addWishlist);
router.delete("/wishlist/:id", middleware, controller.wishlist.deleteWishlist);

//cart
router.get("/cart", middleware, controller.cart.getCart);
router.post("/cart", middleware, controller.cart.addCart);
router.patch("/cart/:id", middleware, controller.cart.updateCart);
// router.delete("/cart/:id", controller.cart.delete);
router.delete("/cart/:id", middleware,controller.cart.delete)
// product routes
router.post(
  "/products",
  middleware,
  upload.single("product_img"),
  controller.product.addProduct
); // image is the input file field name
router.get(
  "/getCategoryProduct",
  middleware,
  controller.product.getCategoryProduct
);

//get userdetail only
router.get("/userdetail", (req, res) => {
  User.find({})
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));
});

// router.delete("/cart/:id", (req, res) => {
//   const pro_id = req.params.id;
//   Cart_item.deleteOne({ product_id: pro_id }, function (err) {
//     if (err) console.log(err);
//     console.log("Successful deletion");
//   });
// });



router.get("/getallproducts", controller.product.getAllProduct);
module.exports = router;



