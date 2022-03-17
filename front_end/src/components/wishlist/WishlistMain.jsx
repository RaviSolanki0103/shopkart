import React from 'react'
import { useSelector } from 'react-redux';
import "./Wishlist.css"
import WishlistCard from './WishlistCard'

function WishlistMain() {
  const ronak = useSelector(state=>state.senddataWishlist);
     console.log(ronak,"ronak");
  return (

    <div className='wishlist-body'>
        <div className='wishlist-header'>My Wishlist() <hr /></div>
        <div className='wishlist-card'>
              {/* <WishlistCard /> */}
             {ronak.map((item)=>{
               return (
                <WishlistCard title={item.men_title}  price={item.men_price}/>
               )
             })
            }</div>
    </div>
  )
  // <WishlistCard title={item.men_title}  price={item.men_price}/>
}

export default WishlistMain