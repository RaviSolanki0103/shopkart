import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./registration.css";
// import { useSelector, useDispatch } from "react-redux";
// import { openLogin } from "../../redux/actions";

function Registration(props) {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [password, setPassword] = useState("");
    // const loginuser = async (e) => {
    //     const form = this.formRef.current;
    //     if (!form.checkValidity()) {
    //         form.reportValidity()
    //         return
    //     }
    //     e.preventDefault();
    //     console.log("User responce", e);
    //     const res = await fetch("/signin", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({ email, password }),
    //     });
    //     console.log("login Working", res);

    //     const data = await res.json();
    //     console.log("login data", data);

    //     if (res.status === 400 || !data) {
    //         window.alert("Invalid Details");
    //         console.log("INHUSBCB");
    //     } else {
    //         window.alert("Login Successfull");

    //         console.log("VALID");

    //         navigate("/");
    //     }
    // };

    const onLogin = () => {
        props.changeFlag(0, "Login");
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div>
            <div>
                <Form
                    id="registartionform"
                    method="post"
                    name="normal_registration"
                    className="registration-form"
                    onSubmit={handleSubmit}
                    initialValues={{
                        remember: true,
                    }}
                >
                    <Form.Item
                        name="username"
                        id="username"
                        autoComplete="off"
                        value={email}
                        onSubmit={handleSubmit}
                        onChange={(e) => setEmail(e.target.value)}
                        rules={[
                            {
                                required: true,
                                message: "This field is Required!",
                            },
                        ]}
                    >
                        <Input
                            prefix={<UserOutlined className="site-form-item-icon" />}
                            placeholder="Enter username"
                            name="username"
                        />
                    </Form.Item>


                    <Form.Item
                        name="email"
                        id="email"
                        autoComplete="off"
                        onSubmit={handleSubmit}
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
                            name="email"
                        />
                    </Form.Item>
                    <Form.Item
                        name="mobile"
                        value={mobile}
                        id="mobile"
                        autoComplete="off"
                        rules={[
                            {
                                required: true,
                                type: "number",
                                message: "This Field is Required!",
                            },
                            
                        ]}
                    >
                        <Input
                            prefix={<UserOutlined className="site-form-item-icon" />}
                            type="number"
                            placeholder="Enter Mobile Number"
                        />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        value={password}
                        id="password"
                        autoComplete="off"
                        // onChange={(e) => setPassword(e.target.value)}
                        rules={[
                            {
                                required: true,
                                type: "password",
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
                        value={password}
                        id="password"
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
                        // onClick={loginuser}
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