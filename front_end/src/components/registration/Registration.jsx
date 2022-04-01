import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Form, Input, Button } from "antd";
import { UserOutlined, MobileOutlined, LockOutlined } from "@ant-design/icons";
import axios from "../../utils/axios-default-baseurl";
import "./registration.css";
import { useDispatch } from "react-redux";
import { openLogin } from "../../redux/actions";
import Toast from "../../utils/Toast";
// import { useSelector, useDispatch } from "react-redux";
// import { openLogin } from "../../redux/actions";

function Registration(props) {
    const navigate = useNavigate();
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmpassword] = useState("");
    const dispatch = useDispatch();

    const onLogin = () => {
        props.changeFlag(0, "Login");
    }

    const createUser = async () => {
        await axios.post('/user', {
            fname, lname, email, phone, password
        }).then((res) => {
            Toast({msg: "User Registration Successfull", success: true})
            // toast.success('', { autoClose: 3000 });
            onLogin();
        }).catch((error) => {
            console.log(error);
        })
    }

    
    const onFinish = (values) => {
        createUser();
    };

    return (
        <div>
            <div>
                <Form
                    method="post"
                    name="normal_registration"
                    className="registration-form"
                    onFinish={onFinish}
                    initialValues={{
                        remember: true,
                    }}
                >

                    <Form.Item
                        name="fname"
                        autoComplete="off"
                        // required
                        value={fname}
                        onChange={(e) => setFname(e.target.value)}
                        rules={[
                            {
                                required: true,
                                message: "This field is Required!",
                            },
                        ]}
                    >
                        <Input
                            prefix={<UserOutlined className="site-form-item-icon" />}
                            placeholder="Enter Firstname"
                        // required
                        />
                    </Form.Item>

                    <Form.Item

                        name="lname"
                        autoComplete="off"
                        value={lname}
                        onChange={(e) => setLname(e.target.value)}
                        rules={[
                            {
                                required: true,
                                message: "This field is Required!",
                            },
                        ]}
                    >
                        <Input
                            prefix={<UserOutlined className="site-form-item-icon" />}
                            placeholder="Enter  Lastname"

                        />
                    </Form.Item>
                    <Form.Item
                        name="email"
                        autoComplete="off"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)
                        }
                        rules={[
                            {
                                required: true,
                                type: "email",
                                message: "Enter Valid Email Address!",
                            },
                            
                        ]}
                    >
                        <Input
                            prefix={<UserOutlined className="site-form-item-icon" />}
                            placeholder="Enter Email"

                        />
                    </Form.Item>
                    <Form.Item
                        name="phone"
                        value={phone}
                        autoComplete="off"
                        onChange={(e) => setPhone(e.target.value)}
                        rules={[
                            {
                                required: true,
                                message: "This Field is Required!",
                            },

                        ]}
                    >
                        <Input
                            prefix={<MobileOutlined className="site-form-item-icon" />}
                            type="number"
                            placeholder="Enter Mobile Number"
                        />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        value={password}
                        autoComplete="off"
                        onChange={(e) => setPassword(e.target.value)}
                        rules={[
                            {
                                required: true,
                                message: "This field is required!",
                            },
                        ]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Registration Password"
                        />
                    </Form.Item>

                    <Form.Item
                        name="confirmpassword"
                        value={confirmpassword}
                        autoComplete="off"
                        onChange={(e) => setConfirmpassword(e.target.value)}
                        rules={[
                            {
                                required: true,
                                message: "This field is required!",
                            },
                        ]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Confirm Password"
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button
                            name="login"
                            value="login"
                            autoComplete="off"
                            type="primary"
                            id="login"
                            htmlType="submit"
                            className="registration-form-button"
                        // onClick={registerUser}
                        >
                            Register
                        </Button>
                        Or
                        <Button className="login-btn" onClick={() => onLogin()}>Existing User? Login</Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};
export default Registration;