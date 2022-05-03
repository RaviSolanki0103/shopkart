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
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Toast from "../../utils/Toast";
import { openLogin, sendProductId } from "../../redux/actions";
import { send_number_of_item } from "../../redux/actions";

function ProductPage() {
  const param = useParams();
  const [sizeToggle, setsizeToggle] = useState(false);
  const [sizeValue, setSizeValue] = useState("");
  const [productData, setproductData] = useState([]);
  const [colorValue, setColorValue] = useState([]);
  const [color, setColor] = useState("");
  const [first, setfirst] = useState(false);
  const token = useSelector((state) => state.loginToken);
  const [numberof_itm, setnumberof_itm] = useState();

  const navigate = useNavigate();
  const dispatch = useDispatch();

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

  /**
   * Delete the product from Wishlist
   */
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
        setproductData(res.data.data);
      })
      .then((err) => {
        err && console.log(err, "SHOW PRODUCT ERROR");
      });
  }, [first]);

  const handleWishlist = (productId) => {
    typeof colorValue === "undefined"
      ? addwishlist(productId)
      : colorValue.filter((data) => data.product_id._id === productId).length
      ? deleteWishlist(productId)
      : addwishlist(productId);
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
    axios
      .get("/api/cart", {
        headers: {
          "Content-Type": "application/json",
          authorization: token,
        },
      })
      .then((res) => {
        typeof res.data.data === "undefined"
          ? color
            ? sizeValue
              ? Toast({ msg: "Added to cart", success: true }) &&
                addToCart_data(item)
              : Toast({ msg: "Please select size" })
            : Toast({ msg: "Please select color" })
          : res.data.data.filter((product) => item === product.product_id._id)
              .length
          ? Toast({ msg: "Product Already Exist in Cart" })
          : Toast({ msg: "Added to cart", success: true }) &&
            addToCart_data(item);
      });
  };

  /**
   * Add Product into the Cart
   */
  const addToCart_data = (item) => {
    axios({
      method: "post",
      url: "/api/cart",
      data: {
        product_id: `${item}`,
        quantity: 1,
        color: color,
        size: sizeValue,
      },
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
    }).then(() => {
      numberofCartItem();
    });
  };

  /**
   *  If Logged in (Navigate to Payment page) else (Login)
   */
  const buyProduct = (id) => {
    color
      ? sizeValue
        ? buyTheProduct(id)
        : Toast({ msg: "Please select size" })
      : Toast({ msg: "Please select color" });
  };
  const buyTheProduct = (id) => {
    const productDetail = [
      {
        product_id: id,
        product_color: color,
        product_size: sizeValue,
        product_quantity: 1,
      },
    ];
    dispatch(sendProductId(productDetail));
    axios
      .get("/api/user", {
        headers: {
          "Content-Type": "application/json",
          authorization: token,
        },
      })
      .then((res) => {
        console.log(res.data.data, "KKOKKK");
        // navigate(`/payment/${id}/${color}/${sizeValue}`);
        navigate(`/payment`);
      })
      .catch((err) => {
        Toast({ msg: "Please Login first!" });
        dispatch(openLogin(true));
      });
  };

  return (
    <div className="outer-div">
      {productData.map((product, key) => {
        return (
          param.id === product._id && (
            <div key={key}>
              <Card
                className="inner-card-sp"
                hoverable
                cover={
                  <img
                    className="img-sp"
                    alt="example"
                    src={`${BASEURL}/uploads/${product.product_img}`}
                  />
                }
              >
                <div className="action-btn">
                  <button onClick={() => getCart(product._id)}>
                    <ShoppingCartOutlined />
                    ADD TO CART
                  </button>
                  <button onClick={() => buyProduct(product._id)}>
                    <ThunderboltFilled />
                    BUY NOW
                  </button>
                </div>
              </Card>

              {
                <button
                  className="wishlist-btn-special"
                  onClick={() => {
                    handleWishlist(product._id);
                    setfirst(!first);
                  }}
                >
                  <HeartFilled
                    className={
                      typeof colorValue === "undefined"
                        ? "redcolor"
                        : colorValue.map((item) =>
                            item.product_id._id === product._id
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
          {productData.map((product, key) => {
            return (
              param.id === product._id && (
                <div key={key} className="full-width">
                  <h3 style={{ fontSize: "1.5rem" }}>{product.name}</h3>
                  <h2 style={{ fontSize: "2.5rem" }}>₹{product.price}</h2>
                  <h2>{product.description}</h2>
                  <div className="col-siz">
                    <p>Select Color</p>
                    <div className="color">
                      {product.color.map((sel_col, key) => {
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
                      {product.size.map((sel_size, key) => {
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
