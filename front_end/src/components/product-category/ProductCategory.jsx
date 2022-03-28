import React, { useEffect, useState } from "react";
import { Card } from "antd";
import "./productcategory.css";
import { Link } from "react-router-dom";
import { HeartFilled } from "@ant-design/icons";
import axios from "axios";

function ProductCategory() {
  const [status, setStatus] = useState(true);
  const [menData, setMenData] = useState([]);
  const [womenData, setWomenData] = useState([]);
  const [kidsData, setKidsData] = useState([]);

  useEffect(() => {
    axios
      .get("/addproduct")
      .then((res) => {
        let menarray = [];
        let womenarray = [];
        let kidarray = [];
        let arrlen = res.data.length;
        if (arrlen > 0) {
          for (let name of res.data) {
            if (name.category === "men") {
              var c = name;
              menarray.push(c);
            }
            if (name.category === "women") {
              var d = name;
              womenarray.push(d);
            }
            if (name.category === "kids") {
              var e = name;
              kidarray.push(e);
            }
          }
          setMenData(menarray.slice(0, 5));
          setWomenData(womenarray.slice(0, 5));
          setKidsData(kidarray.slice(0, 5));
        }
      })
      .then((err) => {
        console.log(err, "SHOW PRODUCT ERROR");
      });
  }, []);

  const { Meta } = Card;

  return (
    <div>
      <Card
        className="card"
        type="inner"
        title={<h2 style={{ fontSize: "2rem" }}>Men's Wear</h2>}
        extra={
          <Link style={{ fontSize: "2rem" }} to="/product-category">
            More
          </Link>
        }
      >
        <div className="div">
          {menData.map((x, key) => {
            return (
              <Card
                key={key}
                className="inner-card"
                hoverable
                cover={
                  <img
                    alt="example"
                    className="img"
                    src={`uploads/${x.product_img}`}
                  />
                }
              >
                <div>
                  <p className="title">{x.name}</p>
                  <p className="price">₹ {x.price}</p>
                  {status ? (
                    <button
                      className="wishlist-btn-new"
                      onClick={() => {
                        setStatus(!status);
                      }}
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
                </div>
              </Card>
            );
          })}
        </div>
      </Card>

      <Card
        className="card"
        type="inner"
        title={<h2 style={{ fontSize: "2rem" }}>Women's Wear</h2>}
        extra={
          <Link style={{ fontSize: "2rem" }} to="#">
            More
          </Link>
        }
      >
        <div className="div">
          {womenData.map((x, key) => {
            return (
              x.category === "women" && (
                <Card
                  key={key}
                  className="inner-card"
                  hoverable
                  cover={
                    <img
                      className="img"
                      alt="example"
                      src={`uploads/${x.product_img}`}
                    />
                  }
                >
                  <div>
                  <p className="title">{x.name}</p>
                  <p className="price" >₹ {x.price}</p>
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
                  </div>
                </Card>
              )
            );
          })}
        </div>
      </Card>

      <Card
        className="card"
        type="inner"
        title={<h2 style={{ fontSize: "2rem" }}>Kid's Wear</h2>}
        extra={
          <Link style={{ fontSize: "2rem" }} to="#">
            More
          </Link>
        }
      >
        <div className="div">
          {kidsData.map((x, key) => {
            return (
              x.category === "kids" && (
                <Card
                  key={key}
                  className="inner-card"
                  hoverable
                  cover={
                    <img
                      className="img"
                      alt="example"
                      src={`uploads/${x.product_img}`}
                    />
                  }
                >
                  <div>
                  <p className="title">{x.name}</p>
                  <p className="price" >₹ {x.price}</p>
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
                  </div>
                </Card>
              )
            );
          })}
        </div>
      </Card>
    </div>
  );
}

export default ProductCategory;
