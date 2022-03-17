import {
  HeartFilled,
  ShoppingCartOutlined,
  ThunderboltFilled,
} from "@ant-design/icons";
import { Button, Card, Descriptions, Image } from "antd";
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
];

const mydata = Object.keys(details[0]);

function ProductPage() {
  const [status, setStatus] = useState(true);
  return (
    <div className="specific-product">
      <div className="left-div">
        <div className="img-div">
          <img className="img-class" preview={false} width={600} src={img1} alt="" />
        </div>
        <div className="btn-div">
          <div className="inner-btn-div">
            <button className="cart-btn">
              <ShoppingCartOutlined /> Add to cart
            </button>
            <button className="buy-btn">
              <ThunderboltFilled /> Buy now
            </button>
          </div>
        </div>
        <div>
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
        </div>
      </div>
      <div className="details">
        <div>
          <h4>Slim Boy Grey Jeans</h4>
        </div>
        <div>
          <h3>399</h3>
        </div>
        <div className="pro-detail">
          <h2>PRODUCT DETAILS</h2>
        </div>
        <Descriptions style={{}}>
          {mydata.map((x, key) => {
            return (
              <Descriptions.Item key={key} label={x} span={3}>
                data
              </Descriptions.Item>
            );
          })}
        </Descriptions>
        <div className="pro-detail">
          <h2>Ratings and Reviews</h2>
        </div>
        <Descriptions style={{}}>
          {mydata.map((x, key) => {
            return (
              <Descriptions.Item key={key} label={x} span={3}>
                data
              </Descriptions.Item>
            );
          })}
        </Descriptions>
      </div>

      {/* <Card
        className="inner-card-sp"
        hoverable
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
            {mydata.map((x, key) => {
              return (
                <Descriptions.Item key={key} label={x} span={3}>
                  data
                </Descriptions.Item>
              );
            })}
          </Descriptions>
        </div>
      </div> */}
    </div>
  );
}

export default ProductPage;
