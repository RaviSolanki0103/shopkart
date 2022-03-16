import React from 'react';
import 'antd/dist/antd.css';
import './registration.css';
import { Form, Input, Button, InputNumber } from 'antd';


const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
};


const Registration = () => {
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <div className="main-div">
    <Form className="reg_form" onFinish={onFinish} validateMessages={validateMessages}>
      <Form.Item
        name={['user', 'email']}
        label="Email"
        rules={[
          {
            type: 'email',
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name={'number'}
        label="Mobile"
        rules={[
          {
            required: true,
            max:10,
          },
        ]}
      >
        <Input type="number" />
      </Form.Item>

      <Form.Item
        name={['user', 'password']}
        label="Password"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input type="password" />
      </Form.Item>
    
      <Form.Item >
        <Button className='reg_submit' type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
      <Form.Item>
        <a className='redirect_login' href="">
         Existing User? Login
        </a>
      </Form.Item>
    </Form>
    </div>
  );
};

export default Registration;
