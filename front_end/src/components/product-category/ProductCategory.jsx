import React, { useEffect, useState } from "react";
import { Card } from "antd";
import "./productcategory.css";
import { Link, useNavigate } from "react-router-dom";
import { HeartFilled } from "@ant-design/icons";
import axios from "axios";
import { BASEURL } from "../../utils/config";

function ProductCategory() {
  const [status, setStatus] = useState(true);
  const [menData, setMenData] = useState([]);
  const [womenData, setWomenData] = useState([]);
  const [kidsData, setKidsData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("/api/getallproducts")
      .then((res) => {
        let menarray = [];
        let womenarray = [];
        let kidarray = [];
        let arrlen = res.data.data.length;
        if (arrlen > 0) {
          for (let cat of res.data.data) {
            if (cat.category.name === "men") {
              var c = cat;
              menarray.push(c);
            }
            if (cat.category.name === "women") {
              var d = cat;
              womenarray.push(d);
            }
            if (cat.category.name === "kids") {
              var e = cat;
              kidarray.push(e);
            }
          }
          setMenData(menarray.slice(0, 5));
          setWomenData(womenarray.slice(0, 5));
          setKidsData(kidarray.slice(0, 5));
        }
      })
      .catch((err) => {
        console.log(err, "SHOW PRODUCT ERROR");
      });
  }, []);

  return (
    <div>
      <Card
        className="card"
        type="inner"
        title={<h2 style={{ fontSize: "2rem" }}>Men's Wear</h2>}
        extra={
          <Link style={{ fontSize: "2rem" }} to="/product-category/men">
            More
          </Link>
        }
      >
        <div className="div">
          {menData ? (
            menData.map((x, key) => {
              return (
                <Card
                  key={key}
                  className="inner-card"
                  hoverable
                  cover={
                    <img
                      alt="example"
                      className="img"
                      src={`${BASEURL}/uploads/${x.product_img}`}
                    />
                  }
                  onClick={() => {
                    navigate(`/product/${x._id}`);
                  }}
                >
                  <div>
                    <p className="title">{x.name}</p>
                    <p className="price">₹ {x.price}</p>
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
              );
            })
          ) : (
            <h2>Loading...</h2>
          )}
        </div>
      </Card>

      <Card
        className="card"
        type="inner"
        title={<h2 style={{ fontSize: "2rem" }}>Women's Wear</h2>}
        extra={
          <Link style={{ fontSize: "2rem" }} to="/product-category/women">
            More
          </Link>
        }
      >
        <div className="div">
          {womenData.map((x, key) => {
            return (
              <Card
                key={key}
                className="inner-card"
                hoverable
                cover={
                  <img
                    className="img"
                    alt="example"
                    src={`${BASEURL}/uploads/${x.product_img}`}
                  />
                }
                onClick={() => {
                  navigate(`/product/${x._id}`);
                }}
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
        title={<h2 style={{ fontSize: "2rem" }}>Kid's Wear</h2>}
        extra={
          <Link style={{ fontSize: "2rem" }} to="/product-category/kids">
            More
          </Link>
        }
      >
        <div className="div">
          {kidsData.map((x, key) => {
            return (
              <Card
                key={key}
                className="inner-card"
                hoverable
                cover={
                  <img
                    className="img"
                    alt="example"
                    src={`${BASEURL}/uploads/${x.product_img}`}
                  />
                }
                onClick={() => {
                  navigate(`/product/${x._id}`);
                }}
              >
                <div>
                  <p className="title">{x.name}</p>
                  <p className="price">₹ {x.price}</p>
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
            );
          })}
        </div>
      </Card>
    </div>
  );
}

export default ProductCategory;
