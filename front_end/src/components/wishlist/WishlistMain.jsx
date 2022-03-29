import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
import "./Wishlist.css";
import { useSelector } from "react-redux";
import Sidebar from "../../utils/sidebar/Sidebar";
import axios from "axios";
import "./WishlistCard.css"
import { DeleteOutlined } from "@ant-design/icons";


function WishlistMain() {
  const ronak = useSelector((state) => state.senddataWishlist);
  // console.log(ronak,"ronak data");

  const [wishlistdata, setwishlistdata] = useState([]);
  const [first, setfirst] = useState(true)

  const delet = (item) => {

    console.log(item,"9r3/ab");
    axios.delete(`/api/wishlist/${item}`).then((res) => {
    
   });
   setfirst(!first)
}

  useEffect(() => {
    axios.get("/api/wishlist").then((res) => {
      setwishlistdata(res.data);
      console.log(res.data, "res");
    });
    // delet()
  }, [first]);
  console.log(wishlistdata, "wishlist data-----------");



  return (  
    <div className="wishlist-sider-body-containner">
      <div className="wishlist-slider">
       
        <Sidebar />
      </div>
      <div className="wishlist-body">
        <div className="wishlist-header">
          My Wishlist() <hr />
        </div>
        {wishlistdata.length>0?
        <div className="wishlist-card">
          {wishlistdata.map((item,key) => {
            return (
              // <WishlistCard imge={`uploads/${item.product_id.product_img}`} title={item.product_id.name} price={item.product_id.price} />

              <div key={key}className="card-container">
                <div className="card-img">
                  <div className="card-img-main">
                    
                    <img src={`uploads/${item.product_id.product_img}`}></img>
                  </div>
                </div>
                <div className="card-detail">
                  <p>{item.product_id.name} </p>
                  <p className="price">₹{item.product_id.price}</p>
                </div>
                <div className="card-button">
                  <button onClick={()=> delet(item.product_id._id)}>
                    <DeleteOutlined />
                  </button>
                </div>
              </div>
            );
          })}
        </div>:"No data"}
      </div>
    </div>
  );
}

export default WishlistMain;
