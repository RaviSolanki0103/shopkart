import { Button, Card, Checkbox, Collapse, Layout } from "antd";
import React, { useState } from "react";
import { Number } from "./data";
import img1 from "../../assets/men-tshirt.png";
import "./product-listing.css";
import { HeartFilled } from "@ant-design/icons";

function ProductListing() {
  const { Meta } = Card;
  const { Panel } = Collapse;

  const [status, setStatus] = useState(true);

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
          <h2>Men's wear</h2>
        </div>
        <div>
          <Card className="new-card" type="inner">
            <div className="space_data">
              {Number.map((x) => {
                return (
                  <Card
                    className="inner-card"
                    hoverable
                    cover={<img alt="example" className="img" src={img1} />}
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
                    <Meta title={x.men_title} />
                    price <Meta title={x.men_price} />
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
