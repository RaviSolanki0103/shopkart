import React from 'react'
import "./WishlistCard.css"

function WishlistCard() {
  return (
    <div className='card-container'> 
        <div className='card-img'>
            <div className='card-img-main'></div>
        </div>
        <div className='card-detail'>
           <p>Running Shoes For Men </p>
           <p className='price'>₹259</p>
        </div>
        <div className='card-button'>
            <button>delet</button>
        </div>
    </div>
  )
}

export default WishlistCard