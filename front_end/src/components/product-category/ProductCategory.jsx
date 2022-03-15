import React from "react";
import { Card, Col, Row } from "antd";
import "./productcategory.css";
import img1 from "../../assets/men-tshirt.png";
import img2 from "../../assets/women-were.png";
import img3 from "../../assets/kids-were.png";

function ProductCategory() {
  const { Meta } = Card;
  const number = [
    {
      men_title: "T-shirt",
      men_price: "599",
      women_title: "Dress-1",
      women_price: "599",
      kid_title: "Kurta-1",
      kid_price: "699",
    },
    {
      men_title: "T-shirt-2",
      men_price: "549",
      women_title: "Dress-2",
      women_price: "599",
      kid_title: "Kurta-2",
      kid_price: "699",
    },
    {
      men_title: "T-shirt-3",
      men_price: "199",
      women_title: "Dress-3",
      women_price: "599",
      kid_title: "Kurta-3",
      kid_price: "699",
    },
    {
      men_title: "T-shirt-4",
      men_price: "399",
      women_title: "Dress-4",
      women_price: "599",
      kid_title: "Kurta-4",
      kid_price: "699",
    },
    {
      men_title: "T-shirt-5",
      men_price: "299",
      women_title: "Dress-5",
      women_price: "599",
      kid_title: "Kurta-5",
      kid_price: "699",
    },
  ];

  return (
    <div>
      <Card
        className="card"
        type="inner"
        title="Men's wear"
        extra={<a href="#">More</a>}
      >
        <div className="div">
          {number.map((x) => {
            return (
              <Card
                className="inner-card"
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={img1} />}
              >
                <Meta title={x.men_title} />
                price <Meta title={x.men_price} />
              </Card>
            );
          })}
        </div>
      </Card>

      <Card
        className="card"
        type="inner"
        title="Women's wear"
        extra={<a href="#">More</a>}
      >
        <div className="div">
          {number.map((x) => {
            return (
              <Card
                className="inner-card"
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={img2} />}
              >
                <Meta title={x.women_title} />
                price
                <Meta title={x.women_price} />
              </Card>
            );
          })}
        </div>
      </Card>

      <Card
        className="card"
        type="inner"
        title="Kid's wear"
        extra={<a href="#">More</a>}
      >
        <div className="div">
          {number.map((x) => {
            return (
              <Card
                className="inner-card"
                hoverable
                style={{ width: 240 }}
                cover={
                  <img alt="example" style={{ height: "25rem" }} src={img3} />
                }
              >
                <Meta title={x.kid_title} />
                Price
                <Meta title={x.kid_price} />
              </Card>
            );
          })}
        </div>
      </Card>
    </div>
  );
}

export default ProductCategory;
