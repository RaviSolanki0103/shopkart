import React from 'react'
import { Layout, Card } from "antd";
import { useDispatch } from "react-redux";
import { loginStatus, loginToken } from "../../redux/actions/index";
import "./sidebar.css";
import {
    PoweroffOutlined,
    ShoppingOutlined,
    DatabaseFilled,
    HeartFilled,
    ProfileTwoTone
} from "@ant-design/icons";
const { Sider } = Layout;

function Sidebar() {
    const dispatch = useDispatch();
    
    return (
        <>
            <Layout className="Sidebar-page-layout">
                {/* Sidebar Menu */}
                <Sider className="Sidebar" style={{ background: "white" }} width={270}>
                    <Card   title="My Profile" />
                    <Card className="Sidebar-card" >
                        <a className="Sidebar-card-link" href="/profile"><ProfileTwoTone /> Personal Information</a>
                    </Card>
                    <Card className="Sidebar-card">
                        <a className="Sidebar-card-link" href="/address"><DatabaseFilled /> Manage Address</a>
                    </Card>
                    <Card className="Sidebar-card">
                        <a className="Sidebar-card-link" href="/order"><ShoppingOutlined /> My Order</a>
                    </Card>
                    <Card className="Sidebar-card">
                        <a className="Sidebar-card-link" href="/wishlist"><HeartFilled /> My Wishlist</a>
                    </Card>
                    <Card className="Sidebar-card">
                        <a className="Sidebar-card-link" href="/" onClick={() => {dispatch(loginStatus(false)); dispatch(loginToken(null))} }><PoweroffOutlined /> Logout</a>

                    </Card>
                </Sider>
            </Layout>

        </>




    )
}

export default Sidebar