const express = require("express");
const router = express.Router();
const controller = require("../controller");
const middleware = require("../middleware/auth");
const upload = require("../config/multerconfig");

// registration routes
router.post("/user", middleware, controller.user.registerUser);



// order routes
router.get("/orders", middleware, controller.order.getOrder);
router.get("/orders/:_id", middleware, controller.order.getSingleOrder);
router.post("/orders", middleware, controller.order.addOrder);

// category routes
router.post("/categories", middleware, controller.category.addCategory);
router.get("/categories", middleware, controller.category.getCategory);
router.get(
  "/categories/:_id",
  middleware,
  controller.category.getSingleCategory
);

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

module.exports = router;
