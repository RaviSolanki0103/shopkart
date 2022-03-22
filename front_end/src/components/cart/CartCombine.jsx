import React from 'react'
import CartLeft from './CartLeft'
import CartRight from './CartRight'
import "./Cart.css"

function Cart() {
  return (
    <div className='cart-container'>
        <CartLeft  className="cart-left"/>
        
        <CartRight  className="cart-right"/>
    </div>
  )
}

export default Cart