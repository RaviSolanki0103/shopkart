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

  /**
   * Fetch All data from Wishlist collection
   */
  const getwishlistdata = () => {
    axios
      .get("/api/wishlist", {
        headers: {
          "Content-Type": "application/json",
          authorization: token,
        },
      })
      .then((res) => {
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

  /**
   * Add the product in Wishlist
   */
  const addwishlist = (productId) => {
    axios({
      method: "post",
      url: "/api/wishlist",
      data: {
        product_id: `${productId}`,
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
        Toast({ msg: err.message });
      }
    });
  };

  /**
   * Delete the product from Wishlist
   */
  const deleteWishlist = (productId) => {
    axios
      .delete(`/api/wishlist/${productId}`, {
        headers: {
          "Content-Type": "application/json",
          authorization: token,
        },
      })
      .then((res) => {});
  };

  /**
   * Fetch All data from Product collection
   */
  const getAllProduct = () => {
    axios
      .get("/api/getallproducts")
      .then((res) => {
        if (res.data.data.length > 0) {
          setMenData(
            res.data.data
              .filter((data) => data.category.name === "men")
              .slice(0, 5)
          );
          setWomenData(
            res.data.data
              .filter((data) => data.category.name === "women")
              .slice(0, 5)
          );
          setKidsData(
            res.data.data
              .filter((data) => data.category.name === "kids")
              .slice(0, 5)
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllProduct();
  }, []);
  useEffect(() => {
    getwishlistdata();
  }, [first]);

  const handleWishlist = (productId) => {
    typeof colorValue === "undefined"
      ? addwishlist(productId)
      : colorValue.filter((data) => data.product_id._id === productId).length
      ? deleteWishlist(productId)
      : addwishlist(productId);
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
                        handleWishlist(men._id);
                        setfirst(!first);
                      }}
                    >
                      <HeartFilled
                        className={
                          typeof colorValue === "undefined"
                            ? "redcolor"
                            : colorValue &&
                              colorValue.map((item) =>
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
                      handleWishlist(women._id);
                      setfirst(!first);
                    }}
                  >
                    <HeartFilled
                      className={
                        typeof colorValue === "undefined"
                          ? "redcolor"
                          : colorValue &&
                            colorValue.map((item) =>
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
                      handleWishlist(kid._id);
                      setfirst(!first);
                    }}
                  >
                    <HeartFilled
                      className={
                        typeof colorValue === "undefined"
                          ? "redcolor"
                          : colorValue &&
                            colorValue.map((item) =>
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
