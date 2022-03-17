import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button, Checkbox, Modal } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./login.css";
import { useSelector, useDispatch } from "react-redux";
import { openLogin } from "../../redux/actions";

function Login() {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const loginuser = async (e) => {
    e.preventDefault();
    console.log("User responce", e);
    const res = await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    console.log("login Working", res);

    const data = await res.json();
    console.log("login data", data);

    if (res.status === 400 || !data) {
      window.alert("Invalid Details");
      console.log("INHUSBCB");
    } else {
      window.alert("Login Successfull");

      console.log("VALID");

      navigate("/");
    }
  };

  const myaction = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className="main-div">
      <Modal
        title="Login"
        footer={null}
        visible={myaction.openLogin}
        onOk={() => dispatch(openLogin(false))}
        onCancel={() => dispatch(openLogin(false))}
      >
        <Form
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
            onChange={(e) => setemail(e.target.value)}
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
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
                message: "Please input your Password!",
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

            <a className="login-form-forgot" href="/">
              Forgot Password?
            </a>
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
            Or <a href="/">Register Now!</a>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

// <div>
// <div className="main-div">
// <div className="container-login">
//   <form method="POST" className="form">
//     <input
//       type="email"
//       name="email"
//       id="email"
//       autoComplete="off"
//       placeholder="Your Email"
//       value={email}
//       onChange={(e) => setemail(e.target.value)}
//     />
//     <input
//       type="password"
//       value={password}
//       name="password"
//       id="password"
//       autoComplete="off"
//       placeholder="Your Password"
//       onChange={(e) => setpassword(e.target.value)}
//     />
//     <input
//       type="submit"
//       name="login"
//       value="login"
//       id="login"
//       autoComplete="off"
//       onClick={loginuser}
//     />
//   </form>
//   </div>
// </div>
// </div>

export default Login;
