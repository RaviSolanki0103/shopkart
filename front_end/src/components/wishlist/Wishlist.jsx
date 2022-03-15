import React from 'react'
import "./Wishlist.css"
import WishlistCard from './WishlistCard'

function Wishlist() {
  return (
    <div className='wishlist-body'>
        <div className='wishlist-header'>My Wishlist() <hr /></div>
        <div className='wishlist-card'>
              <WishlistCard />
              <WishlistCard />
         </div>
    </div>
  )
}

export default Wishlist