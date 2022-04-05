import React, { useState } from "react";
// import validator from 'validator';
// import isEmail from 'validator/lib/isEmail';
import { useNavigate } from "react-router-dom";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./login.css";
import axios from "../../utils/axios-default-baseurl";
import { useDispatch } from "react-redux";
import { loginStatus, loginToken, openLogin } from "../../redux/actions";
import Toast from "../../utils/Toast";
// import { openLogin } from "../../redux/actions";

function LoginForm(props) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const userLogin = async () => {
    await axios
      .get("/loginUser", {
        params: { email, password },
      })
      .then((res) => {
        console.log(res, "hekfjhdjbm");
        dispatch(loginToken(res.data.data.token));
        Toast({ msg: "Login Sucess", success: true });
        dispatch(openLogin(false));
        dispatch(loginStatus(true));
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message, error);
        Toast({ msg: "invalid login credentials", success: false });
      });
  };

  const loginuser = (values) => {
    console.log(email + " " + password + " ");
    userLogin();
  };

  const onRegister = () => {
    props.changeFlag(1, "Registration");
  };

  const onForgot = () => {
    props.changeFlag(2, "Forgot");
  };
  return (
    <Form
      method="post"
      name="normal_login"
      className="login-form"
      onFinish={loginuser}
      initialValues={{
        remember: true,
      }}
    >
      <Form.Item
        name="email"
        autoComplete="off"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        rules={[
          {
            required: true,
            type: "email",
            message: "Enter valid email address",
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          // onChange={(e) => validator.isEmail(e.target.value)}
          placeholder="Enter Email Address"
          name="email"
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
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Button className="forgot-btn" onClick={() => onForgot()}>
          Forgot Password?
        </Button>
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
        >
          Log in
        </Button>
        Or
        <Button className="reg-btn" onClick={() => onRegister()}>
          {" "}
          Create an account
        </Button>
      </Form.Item>
    </Form>
  );
}

export default LoginForm;
