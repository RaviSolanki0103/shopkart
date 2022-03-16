import { HeartFilled } from "@ant-design/icons";
import { Card } from "antd";
import React, { useState } from "react";
import "./productpage.css";
import img1 from "../../assets/kidn.png"

function ProductPage() {
  
    const [status, setStatus] = useState(true);
    const { Meta } = Card;
    return (
    <div>
      <Card
        
        className="inner-card"
        hoverable
        style={{ width: 320, height: "100%" }}
        cover={<img className="img" alt="example" src={img1} />}
      >
        {status ? (
          <button
            className="wishlist-btn-new"
            onClick={() => setStatus(!status)}
          >
            <HeartFilled style={{ color: "#cccccc" }} />
          </button>
        ) : (
          <button
            className="wishlist-btn-new"
            onClick={() => setStatus(!status)}
          >
            <HeartFilled style={{ color: "hotpink" }} />
          </button>
        )}
        <Meta title="kid_title" />
        Price
        <Meta title="234" />
      </Card>
    </div>
  );
}

export default ProductPage;
