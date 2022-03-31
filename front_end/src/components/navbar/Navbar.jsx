import React, { useState } from "react";
import "./navbar.css";
import {
  LoginOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Menu, Input, Badge } from "antd";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  openLogin,
  loginStatus,
  loginToken,
  sendOrderDataToTrack,
} from "../../redux/actions/index";
import Login from "../login/Login";
const { SubMenu } = Menu;

export default function Navbar() {
  const [current, setCurrent] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const dispatch = useDispatch();
  const loginCurrentStatus = useSelector((state) => state.loginStatus);

  const handleClick = (e) => {
    setCurrent(e.key);
  };

  return (
    <nav className="main-navbar">
      <Link to="/" className="navbar-icon" />
      <div className="navbar-search">
        <Input
          placeholder="input with clear icon"
          allowClear
          className="global-search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      <div className="navbar-menu">
        {/* Checking login status,
          if login then show account and cart options else
          show login option
        */}
        {loginCurrentStatus ? (
          <Menu onClick={handleClick} selectedKeys={current} mode="horizontal">
            {/* account menu with available options */}
            <SubMenu key="account" icon={<UserOutlined />} title="Account">
              <Menu.ItemGroup title="account">
                <Menu.Item key="setting:1">
                  <Link to="/profile">Profile</Link>
                </Menu.Item>
                <Menu.Item key="setting:2">
                  <Link to="/order">Orders</Link>
                </Menu.Item>
                <Menu.Item key="setting:3">wishlist</Menu.Item>
              </Menu.ItemGroup>
              <Menu.ItemGroup title="logout">
                <Menu.Item key="setting:4">
                  <Link
                    to="/"
                    onClick={() => {
                      dispatch(loginStatus(false));
                      dispatch(loginToken(null));
                      dispatch(sendOrderDataToTrack(null));
                    }}
                  >
                    Logout
                  </Link>
                </Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
            {/* cart button with badge  */}
            <Menu.Item key="cart">
              <Badge count={1} offset={[4, 2]}>
                <ShoppingCartOutlined className="svg-icon shopping-cart-icon" />
              </Badge>
            </Menu.Item>
          </Menu>
        ) : (
          // login button
          <LoginOutlined
            className="login-btn"
            onClick={() => {
              dispatch(openLogin(true));
              // navigate("/login");
              // setLoginStatus(myaction);
              // setLoginStatus(true);
            }}
          />
        )}
      </div>
      <div style={{ display: "none" }}>
        <Login />
      </div>
    </nav>
  );
}
