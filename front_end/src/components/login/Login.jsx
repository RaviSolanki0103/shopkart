import React, { useState } from "react";
// import validator from 'validator';
// import isEmail from 'validator/lib/isEmail';
// import { Link, useNavigate } from "react-router-dom";
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


