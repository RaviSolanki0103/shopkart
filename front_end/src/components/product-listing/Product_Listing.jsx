import { Button, Card, Checkbox, Collapse } from "antd";
import React, { useState } from "react";
import { Number } from "./data";
import img1 from "../../assets/men-tshirt.png";
import "./product-listing.css";
import { HeartFilled, HeartOutlined } from "@ant-design/icons";

function Product_Listing() {
  const { Meta } = Card;
  const { Panel } = Collapse;

  const [status, setStatus] = useState(true);

  return (
    <div className="listing">
      <div className="filter">
        <h2>Filters</h2>
        <Collapse
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
          <Panel header="Sort by" key="2">
            <Button>Price High to Low</Button>
            <Button>Price Low to High</Button>
          </Panel>
        </Collapse>
      </div>
      <div>
        <Card
          className="new-card"
          type="inner"
          title={<h1>Men's Wear</h1>}
          extra={<a href="#">More</a>}
        >
          <div className="space_data ">
            {Number.map((x) => {
              console.log(x);
              return (
                <Card
                  className="inner-card"
                  hoverable
                  style={{ width: 340 }}
                  cover={<img alt="example" src={img1} />}
                >
                  {status ? (
                    <button
                      className="wishlist-btn"
                      onClick={() => setStatus(!status)}
                    >
                      <HeartOutlined />
                    </button>
                  ) : (
                    <button
                      className="wishlist-btn"
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
  );
}

export default Product_Listing;
