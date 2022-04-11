import {
  HeartFilled,
  ShoppingCartOutlined,
  ThunderboltFilled,
} from "@ant-design/icons";
import { Card } from "antd";
import React, { useEffect, useState } from "react";
import "./productpage.css";
import { BASEURL } from "../../utils/config";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Toast from "../../utils/Toast";
import { send_number_of_item } from "../../redux/actions";

function ProductPage() {
  const param = useParams();
  const [sizeToggle, setsizeToggle] = useState(false);
  const [sizeValue, setSizeValue] = useState("");
  const [productData, setproductData] = useState([]);
  const [colorValue, setColorValue] = useState([]);
  const [color, setColor] = useState([]);
  const [first, setfirst] = useState(false);
  const token = useSelector((state) => state.loginToken);
  const dispatch = useDispatch();
  const [numberof_itm, setnumberof_itm] = useState();

  const getwishlistdata = () => {
    axios
      .get("/api/wishlist", {
        headers: {
          "Content-Type": "application/json",
          authorization: token,
        },
      })
      .then(async (res) => {
        setColorValue(res.data.data);
      })
      .catch((err) => {
        if (err.response.status === 401) {
          setColorValue([]);
        } else {
          Toast({ msg: err.message });
        }
      });
  };

  const addwishlist = (item) => {
    axios({
      method: "post",
      url: "/api/wishlist",
      data: {
        product_id: `${item}`,
      },
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
    }).catch((err) => {
      if (err.response.status === 401) {
        Toast({
          msg: "Please Login",
        });
        setColorValue([]);
      } else {
        Toast({ msg: err.message });
      }
    });
  };

  // delete
  const deleteWishlist = (item) => {
    axios
      .delete(`/api/wishlist/${item}`, {
        headers: {
          "Content-Type": "application/json",
          authorization: token,
        },
      })
      .then((res) => {});
  };

  useEffect(() => {
    // getCart();
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
          deleteWishlist(x);
          break;
        } else if (i === colorValue.length - 1) {
          addwishlist(x);
        } else {
        }
      }
    }
  };

  //-----------------
  const numberofCartItem = () => {
    axios
      .get("/api/cart", {
        headers: {
          "Content-Type": "application/json",
          authorization: token,
        },
      })
      .then((res) => {
        // console.log("cvzxvzxvxzczxc",res.data.data.length);
        setnumberof_itm(res.data.data.length);
        dispatch(send_number_of_item(res.data.data.length));
      });
  };
  //----------------
  // const number_of_item = useSelector(state=>state.send_number_of_item)
  const getCart = (item) => {
    console.log(item, "LPLPLPL------");
    axios
      .get("/api/cart", {
        headers: {
          "Content-Type": "application/json",
          authorization: token,
        },
      })
      .then((res) => {
        typeof res.data.data === "undefined"
          ? addToCart_data(item)
          : res.data.data.filter((x) => item === x.product_id._id).length
          ? console.log("PRODUCT ALREADY EXIST")
          : addToCart_data(item);
      });
  };
  const addToCart_data = (item) => {
    axios({
      method: "post",
      url: "/api/cart",
      data: {
        product_id: `${item}`,
        quantity: 1,
      },
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
    }).then(() => {
      numberofCartItem();
    });
  };

  console.log(colorValue, "OKIOKJIOOIUGY");

  return (
    <div className="outer-div">
      {productData.map((x, key) => {
        return (
          param.id === x._id && (
            <div key={key}>
              <Card
                className="inner-card-sp"
                hoverable
                cover={
                  <img
                    className="img-sp"
                    alt="example"
                    src={`${BASEURL}/uploads/${x.product_img}`}
                  />
                }
              >
                <div className="action-btn">
                  <button onClick={() => getCart(x._id)}>
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
                      typeof colorValue === "undefined"
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
            return (
              param.id === x._id && (
                <div key={key} className="full-width">
                  <h3 style={{ fontSize: "1.5rem" }}>{x.name}</h3>
                  <h2 style={{ fontSize: "2.5rem" }}>₹{x.price}</h2>
                  <h2>{x.description}</h2>
                  <div className="col-siz">
                    <p>Select Color</p>
                    <div className="color">
                      {x.color.map((sel_col, key) => {
                        return (
                          <button
                            key={key}
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
                      {x.size.map((sel_size, key) => {
                        return (
                          <button
                            key={key}
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
