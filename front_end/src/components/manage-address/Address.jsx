import React, { useState } from 'react'
import { Layout, Row, Col, Card } from "antd";
import "./address.css";
import {
    PoweroffOutlined,
    ShoppingOutlined,
    DatabaseFilled,
    HeartFilled,
    ProfileTwoTone,
    PlusCircleOutlined
} from "@ant-design/icons";
const { Sider, Content } = Layout;

function Profile() {


    return (
        <>
            <Layout className="address-page-layout">
                <Sider theme="light" className="address-sidebar">

                    <Card size="medium" title="My Profile" >
                        <a class="sidebar-nav-link" href="/profile">
                            <p><ProfileTwoTone />  Profile Information</p>
                        </a>
                    </Card>
                    <Card size="medium" >
                        <a class="sidebar-nav-link" href="/address">
                            <p> <DatabaseFilled /> Manage Address</p>
                        </a>
                    </Card>
                    <Card size="medium" >
                        <Row>
                            <Col>
                                <a className="sidebar-nav-link" href="/order">
                                    <p> <ShoppingOutlined /> My Orders</p>
                                </a>
                            </Col>
                        </Row>
                    </Card>
                    <Card size="medium" >
                        <Row>
                            <Col>
                                <a class="sidebar-nav-link" href="/wishlist">
                                    <p> <HeartFilled /> My Wishlist</p>
                                </a>
                            </Col>
                        </Row>
                    </Card>
                    <Card size="medium" >
                        <Row>
                            <Col>
                                <a class="sidebar-nav-link" href="#0">
                                    <p> <PoweroffOutlined /> Logout</p>
                                </a>
                            </Col>
                        </Row>
                    </Card>
                </Sider>
                <Content>
                    <div className="margin-10-px order-list-of-card">
                        <Card >
                            <p className="card-title">Manage Address</p>
                        </Card>
                        <Card>
                            <button className="add-address" type="button"  ><PlusCircleOutlined />  ADD NEW ADDRESS</button>


                        </Card>
                        <Card>
                            <div className="address-div">
                                <div>
                                    <div className="dropdown-container" tabindex="-1">
                                        <div className="three-dots"></div>
                                        <div className="dropdown">
                                            <a href="#"><div>Edit</div></a>
                                            <a href="#"><div>Delete</div></a>
                                        </div>
                                    </div>
                                    <p className="user-name">Patel Priya </p>
                                </div>
                                <p>IT Path Solutions PVT. LTD. <br/>Abc@gmail.com </p>
                               

                            </div>
                            <div className="address-div">
                                <div>
                                    <div className="dropdown-container" tabindex="-1">
                                        <div className="three-dots"></div>
                                        <div className="dropdown">
                                            <a href="#"><div>Edit</div></a>
                                            <a href="#"><div>Delete</div></a>
                                        </div>
                                    </div>
                                    <p className="user-name">Patel Priya </p>
                                </div>
                                <p>IT Path Solutions PVT. LTD. <br/>Abc@gmail.com </p>
                            </div>
                            <div className="address-div">
                                <div>
                                    <div className="dropdown-container" tabindex="-1">
                                        <div className="three-dots"></div>
                                        <div className="dropdown">
                                            <a href="#"><div>Edit</div></a>
                                            <a href="#"><div>Delete</div></a>
                                        </div>
                                    </div>
                                    <p className="user-name">Patel Priya </p>
                                </div>
                                <p>IT Path Solutions PVT. LTD. <br/>Abc@gmail.com </p>
                            </div>
                        </Card>
                    </div>
                </Content>
            </Layout>

        </>




    )
}

export default Profile