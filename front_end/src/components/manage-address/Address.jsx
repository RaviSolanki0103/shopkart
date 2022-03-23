import React, { useState } from 'react'
import { Layout, Card } from "antd";
import Form from "../manage-address/Form";
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

function Address() {
    const [open, setIsOpen] = useState(false);
    const openForm = () => setIsOpen(true);

    return (
        <>
            <Layout className="address-page-layout">
            <Sider className="sidebar" style={{ background: "white" }} width={270}>
            <Card  title="My Profile"/>  
            <Card className="Address-card" >
            <a className="Address-card-link" href="/profile"><ProfileTwoTone /> Personal Information</a>
            </Card>
            <Card className="Address-card">
            <a className="Address-card-link" href="/address"><DatabaseFilled /> Manage Address</a>
            </Card>
            <Card className="Address-card">
            <a className="Address-card-link" href="/order"><ShoppingOutlined /> My Order</a>
            </Card>
            <Card className="Address-card">
            <a className="Address-card-link" href="/wishlist"><HeartFilled /> My Wishlist</a>
            </Card>
           <Card className="Address-card">
           <a className="Address-card-link" ><PoweroffOutlined /> Logout</a>
           </Card>
            </Sider>
                <Content>
                    <div className="margin-10-px order-list-of-card">
                        <Card  >
                            <p className="card-title">Manage Addresses</p>
                        </Card>
                        <Card >
                            <button onClick={openForm} className="add-address" type="button"  ><PlusCircleOutlined />  ADD NEW ADDRESS</button>
                            
                        </Card>
                        <Form open={open}/>
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

export default Address