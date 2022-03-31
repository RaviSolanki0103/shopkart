import React, { useEffect, useState } from "react";
import { Card } from "antd";
import "./productcategory.css";
import { Link, useNavigate } from "react-router-dom";
import { HeartFilled } from "@ant-design/icons";
import axios from "axios";
import { BASEURL } from "../../utils/config";
import Toast from "../../utils/Toast";
import { useSelector } from "react-redux";

function ProductCategory() {
  const token = useSelector((state) => state.loginToken);

  const [menData, setMenData] = useState([]);
  const [womenData, setWomenData] = useState([]);
  const [kidsData, setKidsData] = useState([]);
  const [colorValue, setColorValue] = useState([]);
  const [first, setfirst] = useState(false);
  const navigate = useNavigate();
  const getwishlistdata = () => {
    axios
      .get("/api/wishlist", {
        headers: {
          "Content-Type": "application/json",
          authorization: token,
        },
      })
      .then((res) => {
        setColorValue(res.data);
      })
      .catch((err) => {
        if (err.response.status === 401) {
          setColorValue([]);
        } else {
          Toast({ msg: err.message, success: false });
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
          success: false,
        });
        setColorValue([]);
      } else {
        Toast({ msg: err.message, success: false });
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
    getwishlistdata();

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
  }, [first]);

  const checker = (item) => {
    if (colorValue.length === 0) {
      addwishlist(item);
    } else {
      for (let i = 0; i < colorValue.length; i++) {
        if (colorValue[i].product_id._id === item) {
          deleteWishlist(item);
          break;
        } else if (i === colorValue.length - 1) {
          addwishlist(item);
        } else {
        }
      }
    }
  };

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
            menData.map((men, key) => {
              return (
                <div key={key}>
                  <Card
                    className="inner-card"
                    hoverable
                    cover={
                      <img
                        alt="example"
                        className="img"
                        src={`${BASEURL}/uploads/${men.product_img}`}
                      />
                    }
                    onClick={() => {
                      navigate(`/product/${men._id}`);
                    }}
                  >
                    <div>
                      <p className="title">{men.name}</p>
                      <p className="price">₹ {men.price}</p>
                    </div>
                  </Card>
                  {
                    <button
                      className="wishlist-btn-new"
                      onClick={() => {
                        checker(men._id);

                        setfirst(!first);
                      }}
                    >
                      <HeartFilled
                        className={
                          colorValue.length === 0
                            ? "redcolor"
                            : colorValue.map((item) =>
                                item.product_id._id === men._id
                                  ? "greycolor"
                                  : "redcolor"
                              )
                        }
                      />
                    </button>
                  }
                </div>
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
          {womenData.map((women, key) => {
            return (
              <div key={key}>
                <Card
                  className="inner-card"
                  hoverable
                  cover={
                    <img
                      className="img"
                      alt="example"
                      src={`${BASEURL}/uploads/${women.product_img}`}
                    />
                  }
                  onClick={() => {
                    navigate(`/product/${women._id}`);
                  }}
                >
                  <div>
                    <p className="title">{women.name}</p>
                    <p className="price">₹ {women.price}</p>
                  </div>
                </Card>
                {
                  <button
                    className="wishlist-btn-new"
                    onClick={() => {
                      checker(women._id);

                      setfirst(!first);
                    }}
                  >
                    <HeartFilled
                      className={
                        colorValue.length === 0
                          ? "redcolor"
                          : colorValue.map((item) =>
                              item.product_id._id === women._id
                                ? "greycolor"
                                : "redcolor"
                            )
                      }
                    />
                  </button>
                }
              </div>
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
          {kidsData.map((kid, key) => {
            return (
              <div key={key}>
                <Card
                  className="inner-card"
                  hoverable
                  cover={
                    <img
                      className="img"
                      alt="example"
                      src={`${BASEURL}/uploads/${kid.product_img}`}
                    />
                  }
                  onClick={() => {
                    navigate(`/product/${kid._id}`);
                  }}
                >
                  <div>
                    <p className="title">{kid.name}</p>
                    <p className="price">₹ {kid.price}</p>
                  </div>
                </Card>
                {
                  <button
                    className="wishlist-btn-new"
                    onClick={() => {
                      checker(kid._id);

                      setfirst(!first);
                    }}
                  >
                    <HeartFilled
                      className={
                        colorValue.length === 0
                          ? "redcolor"
                          : colorValue.map((item) =>
                              item.product_id._id === kid._id
                                ? "greycolor"
                                : "redcolor"
                            )
                      }
                    />
                  </button>
                }
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
}

export default ProductCategory;
