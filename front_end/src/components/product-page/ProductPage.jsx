import {
  HeartFilled,
  ShoppingCartOutlined,
  ThunderboltFilled,
  ThunderboltOutlined,
} from "@ant-design/icons";
import { Button, Card, Checkbox, Collapse, Descriptions } from "antd";
import React, { useState } from "react";
import "./productpage.css";
import img1 from "../../assets/kidn.png";

const details = [
  {
    id: 1,
    "pro-name": "Boys Festive & Party Shirt & Waistcoat Set (Green Pack of 1)",
    "pro-color": "Red",
    "pro-size": "M",
    Type: "Top-Wear",
    offer: "null",
  },
  {
    id: 2,
    "pro-name": "Girl New Dress (RED Pack of 1)",
    "pro-color": "Green",
    "pro-size": "L",
    Type: "Top-Wear",
  },
  {
    id: 3,
    "pro-name": "Men New Jeans (Black Pack of 1)",
    "pro-color": "Black",
    "pro-size": "N",
    Type: "Bottom-Wear",
  },
  {
    id: 4,
    "pro-name": "Men New Jeans (Black Pack of 1)",
    "pro-color": "Black",
    "pro-size": "S",
    Type: "Bottom-Wear-o",
  },
  {
    id: 5,
    "pro-name": "Men New Jeans (Black Pack of 1)",
    "pro-color": "Black",
    "pro-size": "S",
    Type: "Bottom-Wear-p",
  },
];
const mydata = Object.keys(details[0]);

function ProductPage() {
  const [status, setStatus] = useState(true);
  const { Panel } = Collapse;
  return (
    <div className="specific-product">
      <Card
        className="inner-card-sp"
        hoverable
        style={{ minWidth: 320, height: "100%" }}
        cover={<img className="img-sp" alt="example" src={img1} />}
      >
        {status ? (
          <button
            className="wishlist-btn-sp"
            onClick={() => setStatus(!status)}
          >
            <HeartFilled style={{ color: "#cccccc" }} />
          </button>
        ) : (
          <button
            className="wishlist-btn-sp"
            onClick={() => setStatus(!status)}
          >
            <HeartFilled style={{ color: "hotpink" }} />
          </button>
        )}
        <div className="action-btn">
          <Button style={{ backgroundColor: "#ff9f00", color: "#fff" }}>
            <ShoppingCartOutlined />
            ADD TO CART
          </Button>
          <Button style={{ backgroundColor: "#fb641b", color: "#fff" }}>
            <ThunderboltFilled />
            BUY NOW
          </Button>
        </div>
      </Card>

      <div className="right-div">
        <h3>Boys Festive & Party Shirt & Waistcoat Set (Green Pack of 1)</h3>
        <h2>₹299</h2>

        <div>
            <h2>Product Details</h2>
          <Descriptions style={{}}>
            {details.map((x, key) => {
              console.log(x, "x");
              const fdata = mydata[x.id -1]
              return (
                <Descriptions.Item key={key} label={mydata[x.id - 1]} span={3}>
                  {
                  fdata
                  }
                  
                </Descriptions.Item>
              );
            })}
          </Descriptions>

        </div>
      </div>
    </div>
  );
}

export default ProductPage;
