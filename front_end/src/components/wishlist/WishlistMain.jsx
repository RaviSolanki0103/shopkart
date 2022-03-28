import React from "react";
// import { useSelector } from "react-redux";
import "./Wishlist.css";
import WishlistCard from "./WishlistCard";
import { Layout,  Col, Collapse, Card, Checkbox } from "antd";
import { useSelector } from "react-redux";
import Sidebar from "../../utils/sidebar/Sidebar";


const { Sider, } = Layout;
const { Panel } = Collapse;

function WishlistMain() {
  const ronak = useSelector((state) => state.senddataWishlist);
  console.log(ronak,"ronak data");
  return (
    <div className="wishlist-sider-body-containner">
      <div className="wishlist-slider">
        {/* <Sider theme="light" className="order-filter">
          <Card  size="small" title="My Account">
            <Collapse defaultActiveKey={["1"]}>
              <Panel header="My Profile" key="1">
                <Checkbox.Group className="specific-box" >
                  <Col>
                    <p className="block">Profile</p>
                  </Col>
                  <hr />
                  <br />
                  <Col>
                    <p className="block"> Orders</p>
                  </Col>
                  <hr />
                  <br />
                  <Col>
                    <p className="block"> Cart</p>
                  </Col>
                  <hr />
                  <br />
                  <Col>
                    <p className="block">Wishlist</p>
                  </Col>
                  <hr />
                  <br />
                  <Col>
                    <p className="block">Log out</p>
                  </Col>
                </Checkbox.Group>
              </Panel>
            </Collapse>
          </Card>
        </Sider> */}
        <Sidebar />
      </div>
      <div className="wishlist-body">
        <div className="wishlist-header">
          My Wishlist() <hr />
        </div>
        <div className="wishlist-card">
          {/* <WishlistCard />
          <WishlistCard />
          <WishlistCard /> */}
          {ronak && ronak.map((item) => {
       return (        <WishlistCard title={item.title} price={item.price} />
       );
     })}
        </div>
      </div>
    </div>
  );
}

export default WishlistMain;

