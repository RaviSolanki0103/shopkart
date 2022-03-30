import { Button, Card, Checkbox, Collapse, Layout } from "antd";
import React, { useEffect, useState } from "react";
import "./product-listing.css";
import { HeartFilled } from "@ant-design/icons";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { BASEURL } from "../../utils/config";

function ProductListing() {
  const { Meta } = Card;
  const { Panel } = Collapse;

  const [status, setStatus] = useState(true);

  const [menData, setMenData] = useState([]);
  const [womenData, setWomenData] = useState([]);
  const [kidsData, setKidsData] = useState([]);
  const [colorValue, setColorValue] = useState([]);
  const [first, setfirst] = useState(false);

  const param = useParams();
  const navigate = useNavigate();

  const getwishlistdata = () => {
    axios.get("/api/wishlist").then((res) => {
      setColorValue(res.data);
      console.log(
        res.data.map((x) => console.log(x.product_id._id, "KOKOK")),
        "dddddddddddddddddddddddddd"
      );
    });
  };
  const addwishlist = (item) => {
    // axios.post(`/api/wishlist`);
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
  const delet = (item) => {
    console.log("deledt caleddddd");
    // console.log(item,"9r3/ab");
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
          for (let name of res.data.data) {
            if (name.category.name === "men") {
              var c = name;
              menarray.push(c);
            }
            if (name.category.name === "women") {
              var d = name;
              womenarray.push(d);
            }
            if (name.category.name === "kids") {
              var e = name;
              kidarray.push(e);
            }
          }
          setMenData(menarray);
          setWomenData(womenarray);
          setKidsData(kidarray);
        }
      })
      .then((err) => {
        err && console.log(err, "SHOW PRODUCT ERROR");
      });
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
  };

  return (
    <Layout className="listing">
      {/* Filter */}
      <div className="filter">
        <div>
          <h2 className="filter-title">Filters</h2>
        </div>
        <div className="filter-div">
          <div>
            <Collapse
              className="collapse"
              defaultActiveKey={["1"]}
              // onChange={callback}
            >
              <Panel header="Ratings" key="1">
                <div className="rating-checkbox">
                  <Checkbox
                  // onChange={onChange}
                  >
                    4 ★ & above
                  </Checkbox>
                  <Checkbox
                  // onChange={onChange}
                  >
                    3 ★ & above
                  </Checkbox>
                  <Checkbox
                  // onChange={onChange}
                  >
                    2 ★ & above
                  </Checkbox>
                  <Checkbox
                  // onChange={onChange}
                  >
                    1 ★ & above
                  </Checkbox>
                </div>
              </Panel>
            </Collapse>
          </div>
          <div>
            <Collapse>
              <Panel header="Sort by" key="2">
                <Button>Price High to Low</Button>
                <Button>Price Low to High</Button>
              </Panel>
            </Collapse>
          </div>
        </div>
      </div>

      {/* Title */}
      <div className="product-div">
        <div>
          <h2>{param.id}'s wear</h2>
        </div>
        <div>
          <Card className="new-card" type="inner">
            <div className="space_data">
              {(param.id === "men"
                ? menData
                : param.id === "women"
                ? womenData
                : kidsData
              ).map((x, key) => {
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
                        className="wishlist-btn-sp"
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
      </div>
    </Layout>
  );
}

export default ProductListing;
