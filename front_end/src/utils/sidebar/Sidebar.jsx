import React from "react";
import { Layout, Card } from "antd";
import { useDispatch } from "react-redux";
import { loginStatus, loginToken } from "../../redux/actions/index";
import "./sidebar.css";
import {
  PoweroffOutlined,
  ShoppingOutlined,
  DatabaseFilled,
  HeartFilled,
  ProfileTwoTone,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
const { Sider } = Layout;

function Sidebar() {
  const dispatch = useDispatch();

  return (
    <>
      <Layout className="Sidebar-page-layout">
        {/* Sidebar Menu */}
        <Sider className="Sidebar" style={{ background: "white" }} width={270}>
          <Card title="My Profile" />
          <Card className="Sidebar-card">
            <Link className="Sidebar-card-link" to="/profile">
              <ProfileTwoTone /> Personal Information
            </Link>
          </Card>
          <Card className="Sidebar-card">
            <Link className="Sidebar-card-link" to="/address">
              <DatabaseFilled /> Manage Address
            </Link>
          </Card>
          <Card className="Sidebar-card">
            <Link className="Sidebar-card-link" to="/order">
              <ShoppingOutlined /> My Order
            </Link>
          </Card>
          <Card className="Sidebar-card">
            <Link className="Sidebar-card-link" to="/wishlist">
              <HeartFilled /> My Wishlist
            </Link>
          </Card>
          <Card className="Sidebar-card">
            <Link
              className="Sidebar-card-link"
              to="/"
              onClick={() => {
                dispatch(loginStatus(false));
                dispatch(loginToken(null));
              }}
            >
              <PoweroffOutlined /> Logout
            </Link>
          </Card>
        </Sider>
      </Layout>
    </>
  );
}

export default Sidebar;
