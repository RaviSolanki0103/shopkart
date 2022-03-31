import React, { useEffect, useState } from "react";
import { Card } from "antd";
import "./productcategory.css";
import { Link, useNavigate } from "react-router-dom";
import { HeartFilled } from "@ant-design/icons";
import axios from "axios";
import { BASEURL } from "../../utils/config";

function ProductCategory() {
  const [status, setStatus] = useState("");
  const [menData, setMenData] = useState([]);
  const [womenData, setWomenData] = useState([]);
  const [kidsData, setKidsData] = useState([]);
<<<<<<< HEAD

=======
  const [colorValue, setColorValue] = useState([]);
  const [first, setfirst] = useState(false);
>>>>>>> cb719725dd460c9602265b1980a5a14beec2b483
  const navigate = useNavigate();
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
  // delet
  const delet = (item) => {
    console.log("deledt caleddddd");

    axios.delete(`/api/wishlist/${item}`).then((res) => {});
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
<<<<<<< HEAD
  }, []);
  const addwishlist = () => {
    axios.post(`/api/wishlist`);
=======
  }, [first]);

  const checker = (x) => {
    if (colorValue.length == 0) {
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
>>>>>>> cb719725dd460c9602265b1980a5a14beec2b483
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
            menData.map((x, key) => {
              console.log(x, "PPPPPPPPPPPPP");
              return (
                <div>
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
                    </div>
                  </Card>
                  {
                    <button
                      className="wishlist-btn-new"
                      onClick={() => {
                        checker(x._id);

                        setfirst(!first);
                      }}
                    >
                      <HeartFilled
                        className={
                          colorValue.length == 0
                            ? "redcolor"
                            : colorValue.map((item) =>
                                item.product_id._id == x._id
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
          {womenData.map((x, key) => {
            return (
              <div>
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
                  </div>
                </Card>
                {
                  <button
                    className="wishlist-btn-new"
                    onClick={() => {
                      checker(x._id);

                      setfirst(!first);
                    }}
                  >
                    <HeartFilled
                      className={
                        colorValue.length == 0
                          ? "redcolor"
                          : colorValue.map((item) =>
                              item.product_id._id == x._id
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
          {kidsData.map((x, key) => {
            return (
              <div>
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
                  </div>
                </Card>
                {
                  <button
                    className="wishlist-btn-new"
                    onClick={() => {
                      checker(x._id);

                      setfirst(!first);
                    }}
                  >
                    <HeartFilled
                      className={
                        colorValue.length == 0
                          ? "redcolor"
                          : colorValue.map((item) =>
                              item.product_id._id == x._id
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
