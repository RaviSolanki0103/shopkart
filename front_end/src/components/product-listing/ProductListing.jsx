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

  const param = useParams();
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
  }, []);
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
                    {status ? (
                      <button
                        className="wishlist-btn-cat"
                        onClick={() => setStatus(!status)}
                      >
                        <HeartFilled style={{ color: "#cccccc" }} />
                      </button>
                    ) : (
                      <button
                        className="wishlist-btn-cat"
                        onClick={() => setStatus(!status)}
                      >
                        <HeartFilled style={{ color: "hotpink" }} />
                      </button>
                    )}
                    <Meta title={x.name} />
                    <Meta title={x.price} />
                  </Card>
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
