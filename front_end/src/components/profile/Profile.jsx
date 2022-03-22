import React from 'react'
import { Layout, Row, Col, Collapse, Card } from "antd";
import "./profile.css";
import {
    UserOutlined,
    PoweroffOutlined,
    ShoppingOutlined,
    DatabaseFilled,
    HeartFilled,
    ProfileTwoTone
} from "@ant-design/icons";
const { Sider, Content } = Layout;

function Profile() {
    return (
        <>
            <Layout className="profile-page-layout">
                <Sider theme="light" className="profile-sidebar">

                    <Card size="medium" title="My Profile" >
                        <a class="sidebar-nav-link" href="#0">
                            <p><ProfileTwoTone />  Profile Information</p>
                        </a>
                    </Card>
                    <Card size="medium" >
                        <a class="sidebar-nav-link" href="#0">
                            <p> <DatabaseFilled /> Manage Address</p>
                        </a>
                    </Card>
                    <Card size="medium" >
                        <Row>
                            <Col>
                                <a className="sidebar-nav-link" href="/order">
                                    <p> <ShoppingOutlined /> MyOrders</p>
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
                    <div className="main-content" >
                        <div className="main-title">
                            <h4 >Personal Information <button className="editbtn">Edit</button></h4>
                        </div>
                        <div className="infoform">
                            <form className="form">
                                <label>Name</label><br /><br />
                                <input type="text" placeholder="Priya" />  <input type="text" placeholder="Patel" /> <br /><br />
                                <label>Gender</label><br /><br />
                                <input type="radio" name="gender" value="male" />
                                <label> Male </label>
                                <input type="radio" name="gender" value="female" checked />
                                <label> Female</label><br /><br />
                                <label>Email Address</label><br /><br />
                                <input type="email" name="email" placeholder="priya@gmail.com" /><br /><br />
                                <label >Phone Number</label><br /><br />
                                <input type="number" name="phone" placeholder="1234567890" />


                            </form>
                        </div>

                    </div>
                </Content>
            </Layout>

        </>




    )
}

export default Profile