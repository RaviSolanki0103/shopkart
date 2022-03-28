import {
  HeartFilled,
  ShoppingCartOutlined,
  ThunderboltFilled,
} from "@ant-design/icons";
import { Button, Card } from "antd";
import React, { useEffect, useState } from "react";
import "./productpage.css";
import { BASEURL } from "../../utils/config";
import axios from "axios";
import { useParams } from "react-router-dom";

function ProductPage() {
  const param = useParams();
  const [status, setStatus] = useState(true);
  const [sizeToggle, setsizeToggle] = useState(false);
  const [sizeValue, setSizeValue] = useState("");
  const [colorValue, setColorValue] = useState("");
  const [productData, setproductData] = useState([]);

  useEffect(() => {
    axios
      .get("/addproduct")
      .then((res) => {
        setproductData(res.data);
      })
      .then((err) => {
        err && console.log(err, "SHOW PRODUCT ERROR");
      });
  }, []);

  return (
    <div className="outer-div">
      {productData.map((x, key) => {
        return (
          param.id === x._id && (
            <Card
              className="inner-card-sp"
              hoverable
              key={key}
              cover={
                <img
                  className="img-sp"
                  alt="example"
                  src={`${BASEURL}/uploads/${x.product_img}`}
                />
              }
            >
              <div className="action-btn">
                <Button
                  style={{
                    backgroundColor: "#ff9f00",
                    color: "#fff",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <ShoppingCartOutlined />
                  ADD TO CART
                </Button>
                <Button
                  style={{
                    backgroundColor: "#fb641b",
                    color: "#fff",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <ThunderboltFilled />
                  BUY NOW
                </Button>
              </div>
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
            </Card>
          )
        );
      })}
      <div className="right-div">
        <div className="inner-right-div">
          {productData.map((x, key) => {
            console.log(x);
            return (
              param.id === x._id && (
                <div key={key}>
                  <h3 style={{ fontSize: "1.5rem" }}>{x.name}</h3>
                  <h2 style={{ fontSize: "2.5rem" }}>₹{x.price}</h2>
                  <h2>{x.description}</h2>
                  <div className="col-siz">
                    <p>Select Color</p>
                    <div className="color">
                      {x.color.map((sel_col) => {
                        return (
                          <button
                            className={
                              colorValue === sel_col
                                ? "select-color-btn2"
                                : "select-color-btn"
                            }
                            onClick={() => {
                              setsizeToggle(!sizeToggle);
                              setColorValue(sel_col);
                            }}
                          >
                            {sel_col}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-siz">
                    <p>Select Size</p>
                    <div className="size">
                      {x.size.map((sel_size) => {
                        return (
                          <button
                            className={
                              sizeValue === sel_size
                                ? "select-size-btn2"
                                : "select-size-btn"
                            }
                            onClick={() => {
                              setsizeToggle(!sizeToggle);
                              setSizeValue(sel_size);
                            }}
                          >
                            {sel_size}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
