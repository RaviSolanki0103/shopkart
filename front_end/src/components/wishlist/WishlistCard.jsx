import React from 'react'
import "./WishlistCard.css"
import { DeleteOutlined } from '@ant-design/icons';

function WishlistCard(props) {
  return (
    <div className='card-container'> 
        <div className='card-img'>
            <div className='card-img-main'></div>
        </div>
        <div className='card-detail'>
           <p>{props.title} </p>
           <p className='price'>₹{props.price}</p>
        </div>
        <div className='card-button'>
            <button><DeleteOutlined /></button>
        </div>
    </div>
  )
}

export default WishlistCard