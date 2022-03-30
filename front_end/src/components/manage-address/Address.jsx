import React, { useState } from 'react'
import { Layout, Card } from "antd";
import AddressForm from "../manage-address/AddressForm";
import "./address.css";
import {PlusCircleOutlined} from "@ant-design/icons";
const {  Content } = Layout;

function Address() {
    const [open, setIsOpen] = useState(false);


    return (
        <>
            <Layout className="address-page-layout">
                <Content>
                    <div className="address-contentdiv">
                        <Card  >
                            <p className="card-title">Manage Addresses</p>
                        </Card>
                        <Card >
                            <button onClick={() => setIsOpen(!open)} className="add-address" type="button"  ><PlusCircleOutlined />  ADD NEW ADDRESS</button>

                        </Card>
                        {open && <AddressForm cancel={() => setIsOpen(!open)} />}
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
                                <p>IT Path Solutions PVT. LTD. <br />Abc@gmail.com </p>
                            </div>
                        </Card>
                    </div>
                </Content>
            </Layout>

        </>




    )
}

export default Address