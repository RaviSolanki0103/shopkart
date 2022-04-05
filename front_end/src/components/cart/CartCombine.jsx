import React from 'react'
import CartLeft from './CartLeft'
import "./Cart.css"
import { useSelector } from 'react-redux'

function Cart() {
  // const number_of_item = useSelector(state=>state.send_number_of_item)
  return ( 
    
    <div className='cart-container'>
        <CartLeft  className="cart-left"/>
        
    </div>
  )
}

export default Cart