import React from 'react';

import { Layout, Card } from "antd";
import "./profile.css";
// import {
//     PoweroffOutlined,
//     ShoppingOutlined,
//     DatabaseFilled,
//     HeartFilled,
//     ProfileTwoTone
// } from "@ant-design/icons";
const { Sider, Content } = Layout;

function Profile() {
    //  const ClickLogout = () => {
    //      console.log("user logged out");
    //      alert("Logout Successfully");
    //  }
    return (
        <>
            <Layout className="profile-page-layout">
            
                 {/*Sidebar Menu 
                <Sider className="sidebar" style={{ background: "white" }} width={270}>
                    <Card   title="My Profile" />
                    <Card className="Profile-card" >
                        <a className="Profile-card-link" href="/profile"><ProfileTwoTone /> Personal Information</a>
                    </Card>
                    <Card className="Profile-card">
                        <a className="Profile-card-link" href="/address"><DatabaseFilled /> Manage Address</a>
                    </Card>
                    <Card className="Profile-card">
                        <a className="Profile-card-link" href="/order"><ShoppingOutlined /> My Order</a>
                    </Card>
                    <Card className="Profile-card">
                        <a className="Profile-card-link" href="/wishlist"><HeartFilled /> My Wishlist</a>
                    </Card>
                    <Card className="Profile-card">
                        <a className="Profile-card-link" onClick={ClickLogout} href="/"><PoweroffOutlined /> Logout</a>
                    </Card>
    </Sider>*/}
                {/* Main Content */}
                <Content >
                    {/*<div className="margin-10-px order-list-of-card">*/}
                    <div>
                        <Card>
                            <div className="main-content" >

                                <div className="main-title">

                                    <h4>Personal Information <button className="editbtn">Edit</button></h4>
                                </div>
                                <div className="infoform">
                                    <form className="profile-form">
                                        <label className="form-input-label">Name</label><br /><br />
                                        <input className="form-input" type="text" placeholder="Priya" readonly="true" />  <input className="form-input" type="text" placeholder="Patel" readonly="true" /> <br /><br />
                                        <label className="form-input-label">Gender</label><br /><br />
                                        <input className="form-input-radio-btn" type="radio" name="gender" value="male" />
                                        <label className="form-input-radio"> Male </label>
                                        <input className="form-input-radio-btn" type="radio" name="gender" value="female" checked />
                                        <label className="form-input-radio"> Female</label><br /><br />
                                        <label className="form-input-label">Email Address</label><br /><br />
                                        <input className="form-input" type="email" name="email" placeholder="priya@gmail.com" readonly="true" /><br /><br />
                                        <label className="form-input-label">Phone Number</label><br /><br />
                                        <input className="form-input" type="number" name="phone" placeholder="1234567890" readonly="true" />
                                    </form>
                                </div>
                            </div>
                        </Card>
                    </div>
                </Content>
            </Layout>

        </>




    )
}

export default Profile