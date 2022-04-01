const express = require("express");
const router = express.Router();
const controller = require("../controller");
const middleware = require("../middleware/auth");
const upload = require("../config/multerconfig");
const Wishlist = require("../models/wishlist");
const Cart_item = require("../models/cart");
const User = require("../models/userSchema");


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

//  wishlist ------------------------------------------------------

router.post("/wishlist", async (req, res) => {
  try {
    const { user_id, product_id } = req.body;
    const wishlist_item = new Wishlist({ user_id, product_id });
    const add_wishlist = await wishlist_item.save();

    if (add_wishlist) {
      res.status(201).json({ message: "add wishlist_item successfuly" });
    } else {
      res.status(500).json({ message: "faild" });
    }
  } catch (err) {
    console.log(err);
  
  }
});

router.get("/wishlist", (req, res) => {
  Wishlist.find({ user_id:"6241b1880cbdba7cd682d941" })
    .populate(["product_id"])
    .then((res1) => {
      console.log(res1,"----------------------------------") 
      res.send(res1)
     })
    
    .catch((err) => console.log(err));
    // console.log();
});

//get userdetail only 
router.get("/userdetail", (req, res) => {
  User.find({})
    .then((res) => {
     
      console.log(res)} )
    .catch((err) => console.log(err));
});



router.delete("/wishlist/:id", (req, res) => {
  const pro_id = req.params.id;
  console.log(req.params.id,"----------123--------");
  Wishlist.deleteOne({ product_id: pro_id }, function (err) {
    if (err) console.log(err);
    console.log("Successful deletion");
  });
  // res.send("succes delet")
});

// cart -------------------------------------

router.get("/cart", (req, res) => {
  Cart_item.find({user_id:"6241b1880cbdba7cd682d941"})
       .populate(["product_id"])
      .then((data) => {
         res.send(data)
       })
       .catch((err) => console.log(err)); 
      });
router.post("/cart", (req, res) => {
  try {
    const { product_id,  quantity, user_id } = req.body;
    const cart_item = new Cart_item({ product_id,  quantity, user_id });
    const add_to_cart = cart_item.save();

    if (add_to_cart) {
      res.status(201).json({ message: "add item successfuly" });
    } else {
      res.status(500).json({ message: "faild" });
    }
  } catch (err) {
    console.log(err);
  }
});

router.delete("/cart/:id", (req, res) => {
  const pro_id = req.params.id;
  Cart_item.deleteOne({ product_id: pro_id }, function (err) {
    if (err) console.log(err);
    console.log("Successful deletion");
  });
});

router.patch("/cart/:id" ,(req,res)=> {
  const id = req.params.id;
  Cart_item.findByIdAndUpdate(id, req.body).then(result => res.send(result)).catch(err => res.status(400).send(err))
})

router.get("/getallproducts", middleware, controller.product.getAllProduct);
module.exports = router;


// router.delete("/wishlist/:id", (req, res) => {
//   const pro_id = req.params.id;
//   console.log(req.params.id,"----------123--------");
//   Wishlist.deleteOne({ product_id: pro_id }, function (err) {
//     if (err) console.log(err);
//     console.log("Successful deletion");
//   });
//   // res.send("succes delet")
// });