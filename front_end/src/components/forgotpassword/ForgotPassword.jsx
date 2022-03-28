import React, {  useState } from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "./forgotpassword.css";

function LoginForm(props) {
    const [email, setemail] = useState("");
    const forgotuser =()=>{}
    
    
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
                placeholder="Please Enter Email"
                name="email"
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
                onClick={forgotuser}
            >
               Generate OTP
            </Button>
        </Form.Item>
    </Form>);
}

export default LoginForm;