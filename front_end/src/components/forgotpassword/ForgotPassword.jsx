import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined, MobileOutlined } from "@ant-design/icons";
import "./forgotpassword.css";

function LoginForm(props) {
  const [email, setemail] = useState("");
  const [otp, setOtp] = useState("");
  const [editFieldVisiblity, setEditFieldVisiblity] =
    useState("field-display-none");

  const generateotp = () => {
    setEditFieldVisiblity("field-display-block");
    console.log("Forgot Password");
  };

  return (
    <Form
      method="post"
      name="normal_forgot"
      className="forgot-form"
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
            message: "This field is required!",
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Please Enter Email"
          name="email"
        />
      </Form.Item>

      <Form.Item
        className={editFieldVisiblity}
        name="otp"
        autoComplete="off"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        rules={[
          {
            required: true,
            message: "This field is required!",
          },
        ]}
      >
        <Input
          prefix={<MobileOutlined className="site-form-item-icon" />}
          type="number"
          placeholder="Please Enter Otp"
          name="otp"
        />
      </Form.Item>
      <Form.Item>
        <Button
          name="forgot"
          value="forgot"
          autoComplete="off"
          type="primary"
          id="forgot"
          htmlType="submit"
          className="forgot-form-button"
          onClick={generateotp}
        >
          Generate OTP
        </Button>
      </Form.Item>
    </Form>
  );
}

export default LoginForm;
