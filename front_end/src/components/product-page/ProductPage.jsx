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
  const [productData, setproductData] = useState([]);
  const [colorValue, setColorValue] = useState([]);
  const [color, setColor] = useState([]);
  const [first, setfirst] = useState(false);
  const getwishlistdata = () => {
    axios.get("/api/wishlist").then((res) => {
      setColorValue(res.data);
    });
  };

  const addwishlist = (item) => {
    console.log("wishlist caleddddd");

    axios({
      method: "post",
      url: "/api/wishlist",
      data: {
        product_id: `${item}`,
        user_id: "6241b1880cbdba7cd682d941",
      },
    });
  };
  // delete
  const delet = (item) => {
    console.log("deledt caleddddd");

    axios.delete(`/api/wishlist/${item}`).then((res) => {});
  };

  useEffect(() => {
    getwishlistdata();
    axios
      .get("/api/getallproducts")
      .then((res) => {
        setproductData(res.data.data);
      })
      .then((err) => {
        err && console.log(err, "SHOW PRODUCT ERROR");
      });
  }, [first]);

  const checker = (x) => {
    if (colorValue.length === 0) {
      addwishlist(x);
    } else {
      for (let i = 0; i < colorValue.length; i++) {
        if (colorValue[i].product_id._id === x) {
          delet(x);
          break;
        } else if (i == colorValue.length - 1) {
          addwishlist(x);
        } else {
        }
      }
    }
  };

  return (
    <div className="outer-div">
      {productData.map((x, key) => {
        return (
          param.id === x._id && (
            <div className="img-div">
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
                  <button>
                    <ShoppingCartOutlined />
                    ADD TO CART
                  </button>
                  <button>
                    <ThunderboltFilled />
                    BUY NOW
                  </button>
                </div>
              </Card>

              {
                <button
                  className="wishlist-btn-special"
                  onClick={() => {
                    checker(x._id);

                    setfirst(!first);
                  }}
                >
                  <HeartFilled
                    className={
                      colorValue.length === 0
                        ? "redcolor"
                        : colorValue.map((item) =>
                            item.product_id._id === x._id
                              ? "greycolor"
                              : "redcolor"
                          )
                    }
                  />
                </button>
              }
            </div>
          )
        );
      })}
      <div className="right-div">
        <div className="inner-right-div">
          {productData.map((x, key) => {
            console.log(x);
            return (
              param.id === x._id && (
                <div key={key} className="full-width">
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
                              color === sel_col
                                ? "select-color-btn2"
                                : "select-color-btn"
                            }
                            onClick={() => {
                              setsizeToggle(!sizeToggle);
                              setColor(sel_col);
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
