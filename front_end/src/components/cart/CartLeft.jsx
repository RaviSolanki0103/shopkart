import React, { useState, useEffect } from "react";
import "./CartLeft.css";
import { PlusCircleOutlined, MinusCircleOutlined } from "@ant-design/icons";
import { Card } from "antd";
import { useDispatch } from "react-redux";
import { send_totalamount } from "../../redux/actions";
import { send_number_of_item } from "../../redux/actions";
import { senddataWishlist } from "../../redux/actions";
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
  const total_item_in_cart = arr.length;
  const [quantity, setquantity] = useState(Element);
  const [total_amount, settotal_amount] = useState("");
  const dispatch = useDispatch();
  // send number of item with increment
  // const number_of_item = quantity.map((item) => item.value).reduce((prev, curr) => prev + curr, 0);

  // incremnet quantity--------------------------------
  const Increment = (value) => {
    let x = quantity.findIndex((item) => item.id == value.id);
    console.log(x);
    const temp = [...quantity];
    temp[x].value = value.value + 1;
    setquantity(temp);
    dispatch(send_totalamount(total_amount));
    dispatch(send_number_of_item(total_item_in_cart));
  };
  // decremnet quantity--------------------------------
  const Decrement = (value) => {
    let x = quantity.findIndex((item) => item.id == value.id);
    const temp = [...quantity];
    if (temp[x].value > 1) {
      temp[x].value = value.value - 1;
      //  console.log("Before update: ", quantity[x])
      //  quantity[x].value=value.value + 1

      //  quantity[x].value=value.value+1
      //  x.value+=1
      // console.log("rewtrtr",quantity[x].value);
      //  console.log("Hello",quantity[x]);

      setquantity(temp);
      dispatch(send_totalamount(total_amount));
      dispatch(send_number_of_item(total_item_in_cart));
    }
  };

  const total = () => {
    const sumall = quantity
      .map((item) => item.price * item.value)
      .reduce((prev, curr) => prev + curr, 0);
    settotal_amount(sumall);
  };

  useEffect(() => {
    total();
    dispatch(send_totalamount(total_amount));
    dispatch(send_number_of_item(total_item_in_cart));
  }, [Increment, Decrement]);
  // console.log(total_amount);

  const removeItem = (id) => {
    // console.log("item-removw",id);
    setquantity(quantity.filter(item => item.id !== id.id));
    console.log("removed id ",id.id);
}
const AddtoWishlist  = (item) => {
     const wishlist_data = [{id:item.id,title:item.name,price:item.price,img:item.img}]
     console.log(wishlist_data);
     dispatch(senddataWishlist(wishlist_data));
}

  return (
    <div className="cart-left-side-container">
      <Card title={`My Cart(${total_item_in_cart})`} className="cart-left-card">
        {quantity.map((item) => {
          // console.log("item",item);
          return (
            <div className="Main-container_left_cart">
              <div key={item.id} className="cart-img-detail-container">
                <div>
                  <img src={item.img} alt="" className="cart-img" />
                </div>
                <div className="cart-detail">
                  <p>{item.name}-{item.id}</p>
                  <p className="cart-price">{item.price * item.value}</p>
                </div>
              </div>
              <div className="cart-buttons">
                <div className="cart-button-inc-dec-group">
                  <MinusCircleOutlined
                    className="cart-minus-button"
                    onClick={() => Decrement(item)}
                  />
                  <h2>{item.value}</h2>
                  <PlusCircleOutlined
                    className="cart-plus-button"
                    onClick={() => Increment(item)}
                  />
                </div>
                <div className="cart-add-remove">
                  <button className="add-wishlist-buttton" onClick={()=>AddtoWishlist(item)}>
                    Add to wishlist
                  </button>
                  <button className="remove-button" onClick={()=>removeItem(item)}>Remove</button>
                </div>
              </div>
              {/* <hr /> */}
              <div className="cart-placeoreder-button">
                <button className="cart-placeoreder-button_">
                  Place Order
                </button>
              </div>
            </div>
          );
        })}
        {/* <div className="cart-img-detail-container">
              <div className="cart-img"></div>
              <div className="cart-detail">
                  <p>Medellin MED-BLK-C Acoustic Guitar Linden Wood R</p>
                  <p className="cart-price">₹2,399</p>
              </div>
          </div>
          <div className="cart-buttons">
              <div className="cart-button-inc-dec-group">
              <MinusCircleOutlined className="cart-minus-button" onClick={()=>{
                if(quantity >1)
                setquantity(quantity -1)
                }} />
              <h2>{quantity}</h2>
              <PlusCircleOutlined  className="cart-plus-button"  onClick={()=>{setquantity(quantity +1)}} />
              </div>
              <div className="cart-add-remove">
              <button className="add-wishlist-buttton">Add to wishlist</button>
              <button className="remove-button">Remove</button>
              </div>
          </div>
          <hr />
          <div className="cart-placeoreder-button">
                <button className="cart-placeoreder-button_">Place Order</button>
          </div> */}
      </Card>
    </div>
  );
}

export default CartLeft;


// removeTodo(name){
//   this.setState({
//       todo: this.state.todo.filter(el => el !== name)
//   })
// }