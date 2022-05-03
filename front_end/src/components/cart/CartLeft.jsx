import React, { useState, useEffect } from "react";
import "./CartLeft.css";
import { PlusCircleOutlined, MinusCircleOutlined } from "@ant-design/icons";
import { Card, Empty } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { sendProductId, send_totalamount } from "../../redux/actions";
import { send_number_of_item } from "../../redux/actions";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./CartRight.css";

function CartLeft() {
  const [cartdata, setcartdata] = useState([]);
  const [status, setstatus] = useState(true);
  const [first, setfirst] = useState();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.loginToken);
  const [second, setsecond] = useState([])
const navigate = useNavigate();

  //----------------
  const amount = useSelector((state) => state.send_totalamount);
  const number_of_item = useSelector((state) => state.send_number_of_item);
  //=--------------------
  const getcarttdata = () => {
    axios
      .get("/api/cart", {
        headers: {
          "Content-Type": "application/json",
          authorization: token,
        },
      })
      .then((res) => {
        res.data.status === 200 && setcartdata(res.data.data);
        const price =
          res.data.data.length &&
          res.data.data
            .map((item) => item.product_id.price * item.quantity)
            .reduce((prev, curr) => prev + curr, 0);
        setfirst(price);
        dispatch(send_totalamount(price));
        dispatch(send_number_of_item(res.data.data.length));
      });
  };

  // incremnet quantity--------------------------------
  const Increment = (value) => {
    incrementQuantity(value);
    setstatus(!status);
  };
  const incrementQuantity = async (value) => {
    console.log(value._id, "okokokokok");

    await axios({
      method: "patch",
      url: `/api/cart/${value._id}`,
      data: {
        quantity: value.quantity + 1,
      },
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
    });
  };
  // decremnet quantity--------------------------------
  const Decrement = (value) => {
    if (value.quantity !== 1) decrementQuantity(value);
    setstatus(!status);
  };

  const decrementQuantity = async (value) => {
    console.log(value);
    await axios({
      method: "patch",
      url: `/api/cart/${value._id}`,
      data: {
        quantity: value.quantity - 1,
      },
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
    });
  };

  useEffect(() => {
    getcarttdata();
  }, [status]);

  const removeItem = (id) => {
    axios
      .delete(`/api/cart/${id}`, {
        headers: {
          "Content-Type": "application/json",
          authorization: token,
        },
      })
      .then((res) => {});
    setstatus(!status);
  };

  const AddtoWishlist = (item) => {
    axios
      .get("/api/wishlist", {
        headers: {
          "Content-Type": "application/json",
          authorization: token,
        },
      })
      .then((res) => {
        const result = res.data.data.filter((x) => item === x.product_id._id);
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
      },
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
    });
  };

  return cartdata ? (
    <div className="cart-left-side-container">
      <div className="both-screen">
        <Card
          title={`My Cart(${cartdata === undefined ? "0" : cartdata.length})`}
          className="cart-left-card"
        >
          {cartdata ? (
            cartdata.map((item, key) => {
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
                  <div>
                  <div className="cart-detail">
                    <p className="productname">{item.product_id.name}</p>
                    <p className="productname">
                      Color: {item.color} &nbsp;&nbsp;&nbsp; Size:
                      {item.size}
                    </p>
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
          })
        ) : (
          <Empty />
        )}
      </Card>
      <div className="">
        <button className="cart-placeoreder-button_5 " onClick={()=>{dispatch(sendProductId(cartdata))
        navigate("/payment")
        }}>Place Order</button>
      </div>
    </div>
    </div>
  ) : (
    <Empty />
  );
}

export default CartLeft;
// cart-placeoreder-button
// cart-placeoreder-button_
