import React, {  useState } from "react";
import validator from 'validator';
// import isEmail from 'validator/lib/isEmail';
import {  useNavigate } from "react-router-dom";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./login.css";
// import { useSelector, useDispatch } from "react-redux";
// import { openLogin } from "../../redux/actions";

function LoginForm(props) {
    const navigate = useNavigate();
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const loginuser = () =>{}
    // const loginuser = async (e) => {
        // const form = this.formRef.current;
        // if (!form.checkValidity()) {
        //     form.reportValidity()
        //     return
        // }
        // e.preventDefault();
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

    const onRegister = () => {
        props.changeFlag(1,"Registration");
    }

    const onForgot = () => {
        props.changeFlag(2,"Forgot");
    }
    return (<Form
        method="post"
        name="normal_login"
        className="login-form"
        initialValues={{
            remember: true,
        }}
    >
        <Form.Item
            name="username"
            id="email"
            autoComplete="off"
            value={email}
            onChange={(e) => setemail(e.target.value)
            }
            rules={[
                {
                    required: true,
                    message: "This field is required!",
                },
            ]}
        >
            <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                // onChange={(e) => validator.isEmail(e.target.value)}
                placeholder="Username"
                name="email"
            />
        </Form.Item>
        <Form.Item
            name="password"
            value={password}
            id="password"
            autoComplete="off"
            onChange={(e) => setpassword(e.target.value)}
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
                placeholder="Password"
            />
        </Form.Item>
        <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <Button className="forgot-btn" onClick={()=>onForgot()}>Forgot Password?</Button>
    {/*    <a className="login-form-forgot" href="/">
            Forgot Password?
        </a> */}
        </Form.Item>

        <Form.Item>
            <Button
                name="login"
                value="login"
                autoComplete="off"
                type="primary"
                id="login"
                htmlType="submit"
                className="login-form-button"
                onClick={loginuser}
            >
                Log in
            </Button>
            Or
            <Button className="reg-btn" onClick={()=>onRegister()}> Create an account</Button>
        </Form.Item>
    </Form>);
}

export default LoginForm;