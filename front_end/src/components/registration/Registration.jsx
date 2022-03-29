import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import axios from "../../utils/axios-default-baseurl";
import "./registration.css";
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

    const createUser = async () => {
        await axios.post('/user').then((res) => {
            setFname(res.fname);
            setLname(res.lname);
            setEmail(res.email);
            setPhone(res.phone);
            setPassword(res.password);
            setConfirmpassword(res.confirmpassword);
            console.log(res);
        }).catch((error) => {
            console.log(error);
        })
    }
    createUser();

    const registerUser = (e) => {
        e.preventDefault();
        console.log(fname + " " + lname + " " + phone + " " + email + " " + password + " " + confirmpassword);
    };

    return (
        <div>
            <div>
                <Form
                    id="registartionform"
                    method="post"
                    name="normal_registration"
                    className="registration-form"
                    initialValues={{
                        remember: true,
                    }}
                >
                    <Form.Item
                        autoComplete="off"
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
                        />
                    </Form.Item>

                    <Form.Item
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
                        value={phone}
                        autoComplete="off"
                        onChange={(e) => setPhone(e.target.value)}
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
                        value={password}
                        autoComplete="off"
                        onChange={(e) => setPassword(e.target.value)}
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
                        value={password}
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
                            onClick={registerUser}
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