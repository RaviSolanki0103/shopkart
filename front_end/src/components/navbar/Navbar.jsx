import React, { useState } from "react";
import "./navbar.css";
import {
  LoginOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Menu, Input, Badge } from "antd";
const { SubMenu } = Menu;

export default function Navbar() {
  const [current, setCurrent] = useState("");
  const status = true;

  const handleClick = (e) => {
    setCurrent(e.key);
  };

  const onChange = (e) => console.log(e.target.value);

  return (
    <nav className="main-navbar">
      <div className="navbar-icon"></div>
      <div className="navbar-search">
        <Input
          placeholder="input with clear icon"
          allowClear
          className="global-search"
          onChange={onChange}
        />
      </div>
      <div className="navbar-menu">
        {status ? (
          <Menu onClick={handleClick} selectedKeys={current} mode="horizontal">
            {/* account menu with available options */}
            <SubMenu key="account" icon={<UserOutlined />} title="Account">
              <Menu.ItemGroup title="account">
                <Menu.Item key="setting:1">Profile</Menu.Item>
                <Menu.Item key="setting:2">Orders</Menu.Item>
                <Menu.Item key="setting:3">wishlist</Menu.Item>
              </Menu.ItemGroup>
              <Menu.ItemGroup title="logout">
                <Menu.Item key="setting:4">Logout</Menu.Item>
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
          <LoginOutlined className="login-btn" />
        )}
      </div>
    </nav>
  );
}
