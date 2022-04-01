import React, { useState, useEffect } from "react";
import "./CartLeft.css";
import { PlusCircleOutlined, MinusCircleOutlined } from "@ant-design/icons";
import { Card } from "antd";
import { useDispatch } from "react-redux";
import { send_totalamount } from "../../redux/actions";
import { send_number_of_item } from "../../redux/actions";
import { senddataWishlist } from "../../redux/actions";
import axios from "axios";
const Element = [
  {
    id: 1,
    name: "abc",
    price: 499,
    img: require("../../assets/Shoes.jpg"),
    value: 1,
  },
  {
    id: 2,
    name: "abc",
    price: 499,
    img: require("../../assets/Shoes.jpg"),
    value: 1,
  },
  {
    id: 3,
    name: "abc",
    price: 499,
    img: require("../../assets/Shoes.jpg"),
    value: 1,
  },
  {
    id: 4,
    name: "xyz",
    price: 599,
    img: require("../../assets/Shoes.jpg"),
    value: 1,
  },
  {
    id: 5,
    name: "shoes",
    price: 599,
    img: require("../../assets/Shoes.jpg"),
    value: 1,
  },
];

function CartLeft() {
  const arr = Element;
  const [cartdata, setcartdata] = useState([]);
  const [quantity, setquantity] = useState(Element);
  const [total_amount, settotal_amount] = useState("");
  const [status, setstatus] = useState(true);
  const [first, setfirst] = useState();
  const total_item_in_cart = cartdata.length;
  const dispatch = useDispatch();
  const getcarttdata = () => {
    axios.get("/api/cart").then((res) => {
      setcartdata(res.data);
      const price =
        res.data.length &&
        res.data
          .map((item) => item.product_id.price * item.quantity)
          .reduce((prev, curr) => prev + curr, 0);
      setfirst(price);
      dispatch(send_totalamount(price));
      dispatch(send_number_of_item(res.data.length));
    });
  };

  // incremnet quantity--------------------------------
  const Increment = (value) => {
    incrementQuantity(value);
    setstatus(!status);
  };
  const incrementQuantity = (value) => {
    axios({
      method: "patch",
      url: `/api/cart/${value._id}`,
      data: {
        quantity: value.quantity + 1,
      },
    });
  };
  // decremnet quantity--------------------------------
  const Decrement = (value) => {
    if (value.quantity !== 1) decrementQuantity(value);
    setstatus(!status);
  };

  const decrementQuantity = (value) => {
    axios({
      method: "patch",
      url: `/api/cart/${value._id}`,
      data: {
        quantity: value.quantity - 1,
      },
    });
  };

  useEffect(() => {
    getcarttdata();
  }, [status]);

  const removeItem = (id) => {
    axios.delete(`/api/cart/${id}`).then((res) => {});
    setstatus(!status);
  };

  const AddtoWishlist = (item) => {
    axios.get("/api/wishlist").then((res) => {
      const result = res.data.filter((x) => item === x.product_id._id);
      { 
        result.length
          ? console.log("PRODUCT ALREADY EXIST")
          : addDataToWishlist(item);
      }
    });
  };

  const addDataToWishlist = (item) => {
    axios({
      method: "post",
      url: "/api/wishlist",
      data: {
        product_id: `${item}`,
        user_id: "6241b1880cbdba7cd682d941",
      },
    });
  };

  return (
    <div className="cart-left-side-container">
      <Card title={`My Cart(${total_item_in_cart})`} className="cart-left-card">
        {cartdata.map((item, key) => {
          return (
            <div key={key} className="Main-container_left_cart">
              <div className="cart-img-detail-container">
                <div>
                  <img
                    src={`uploads/${item.product_id.product_img}`}
                    alt=""
                    className="cart-img"
                  />
                </div>
                <div className="cart-detail">
                  <p className="productname">{item.product_id.name}</p>
                  <p className="cart-price">
                    ₹{item.product_id.price * item.quantity}
                  </p>
                </div>
              </div>
              <div className="cart-buttons">
                <div className="cart-button-inc-dec-group">
                  <MinusCircleOutlined
                    className="cart-minus-button"
                    onClick={() => Decrement(item)}
                  />
                  <h2>{item.quantity}</h2>
                  <PlusCircleOutlined
                    className="cart-plus-button"
                    onClick={() => Increment(item)}
                  />
                </div>
                <div className="cart-add-remove">
                  <button
                    className="button-28 "
                    onClick={() => AddtoWishlist(item.product_id._id)}
                  >
                    Add to wishlist
                  </button>
                  <button
                    className="remove_button"
                    onClick={() => removeItem(item.product_id._id)}
                  >
                    Remove
                  </button>
                </div>
              </div>

             
            </div>
          );
        })}
      </Card>

      <div className="">
                <button className="cart-placeoreder-button_5 ">
                  Place Order
                </button>
              </div>
    </div>
  );
}

export default CartLeft;
// cart-placeoreder-button
// cart-placeoreder-button_