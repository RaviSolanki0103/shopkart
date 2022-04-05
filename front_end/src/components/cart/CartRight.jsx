// import React, { useEffect } from "react";
import "./CartRight.css";
import { Card, Empty } from "antd";
import { useSelector } from "react-redux";

function CartRight() {
 const amount = useSelector(state=>state.send_totalamount)
  const number_of_item = useSelector(state=>state.send_number_of_item)
  return (
    number_of_item == "undefined" ? <Empty /> :
    <div className="cart-right-container">
      <Card className="cart-right-card"
        title="PRICE DETAILS"
       >
        <div className="cart-right-1">
            <p>Price ({number_of_item})</p> 
            <p>₹{amount}</p> </div>
        <div className="cart-right-2">
            <p>Delivery Charges</p>
            <p>free</p>
        </div>
        <hr />
        <div className="cart-right-3">
            <p>Total Amount</p>
            <p>₹{amount}</p>
        </div>
      </Card>
    </div> 
  );
}

export default CartRight;
