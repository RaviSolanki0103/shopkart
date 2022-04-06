import React, { useState } from "react";
import {  Modal } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { openLogin } from "../../redux/actions";
import LoginForm from "./LoginForm";
import Registration from "../registration/Registration";
import ForgotPassword from "../forgotpassword/ForgotPassword";

function Login() {
  const [title, setTitle] = useState("Login");
  const [flag, setFlag] = useState(0);

  const myaction = useSelector((state) => state);
  const dispatch = useDispatch();

  const changeFlag = (value, title) => {
    setFlag(value);
    setTitle(title);
  }

  return (
    <div className="main-div">
      <Modal
        title={flag === 0 ? "Login":title}
        footer={null}
        visible={myaction.openLogin}
        onOk={() => dispatch(openLogin(false))}
        onCancel={() => 
          {dispatch(openLogin(false))
          setFlag(0)
          }
        }
      >
        {
          flag === 0 ? <LoginForm changeFlag={changeFlag}  /> : flag === 1 ? <Registration changeFlag={changeFlag} />:  <ForgotPassword changeFlag={changeFlag}  />
        }
      </Modal>
    </div>
  );
}
export default Login;


