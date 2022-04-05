import React, { useEffect, useState } from "react";
import { Layout, Card } from "antd";
import "./profile.css";
import Toast from "../../utils/Toast";
import axios from "../../utils/axios-default-baseurl";
import { useSelector } from "react-redux";
import Sidebar from "../../utils/sidebar/Sidebar";
const { Content } = Layout;

function Profile() {
  const token = useSelector((state) => state.loginToken);
  const [isReadOnly, setIsReadOnly] = useState(true);
  const [userData, setUserData] = useState({});
  const [editBtnVisiblity, setEditBtnVisiblity] = useState("btn-display-none");
  

  const fetchUserData = async () => {
    await axios
      .get("/user", {
        headers: {
          "Content-Type": "application/json",
          authorization: token,
        },
      })
      .then((res) => setUserData(res.data.data))
      .catch((err) => console.log("error: ", err));
  };

  const updateUserData = async (e) => {
    e.preventDefault();
    console.log("user data updated....", JSON.stringify(userData));
    await axios
      .patch("/user",{fname: userData.fname, lname: userData.lname, email: userData.email, phone: userData.phone},{
        headers: {
          "Content-Type": "application/json",
          authorization : token,
        //   "authorization": `Bearer ${token}`,
        },
      }).then((res) => console.log("response from update data", res))
      .catch((err) => console.log("error: ",err));
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const cancelEvent = () =>{
    fetchUserData();
    setIsReadOnly(!isReadOnly);
    setEditBtnVisiblity("btn-display-none")
  }
  // const saveEvent = () => {
  //   Toast({msg: "Add Details Successfully", success: true})
  //   // fetchUserData();
  // };

  // const checkboxChange = (e) => {
  //   if(!e.checked) {
  //     console.log("name: ", e.target.value);
  //   }
  //   e.target.checked = !e.checked;
  // }

  return (
    <>
      <Layout className="profile-page-layout">
        <Sidebar />
        <Content className="profile-page-content">
          <div>
            <Card>
              <div className="main-content">
                <div className="main-title">
                  <h4>
                    Personal Information{" "}
                    {isReadOnly ? (
                      <button
                        className="editbtn"
                        onClick={() => {setIsReadOnly(!isReadOnly); setEditBtnVisiblity("btn-display-block")}}
                      >
                        Edit
                      </button>
                    ) : (
                      
                      <button className="editbtn"  onClick={() => cancelEvent()}>
                        Cancel
                      </button>
                    )}
                  </h4>
                </div>
                <div className="infoform">
                  <form className="profile-form">
                    <label className="form-input-label">Name</label>
                    <br />
                    <br />
                    <input
                      className="form-input"
                      type="text"
                      value={userData.fname}
                      onChange={(e) =>
                        setUserData({ ...userData, fname: e.target.value })
                      }
                      placeholder="First Name"
                      readOnly={isReadOnly}
                    />
                    <input
                      className="form-input"
                      type="text"
                      value={userData.lname}
                      placeholder="Last Name"
                      onChange={(e) =>
                        setUserData({ ...userData, lname: e.target.value })
                      }
                      readOnly={isReadOnly}
                    />
                    <br />
                    <br />
                  
                    {/*
                    <div onChange={checkboxChange}>
                    <input
                      className="form-input-radio-btn"
                      type="radio"
                      name="gender"
                      value="male"
                      // onChange={(e)=>e.target.checked}
                      // checked={userData.gender === "male"}
                    />
                    <label className="form-input-radio"> Male </label>
                    <input
                      className="form-input-radio-btn"
                      type="radio"
                      name="gender"
                      value="female"
                      // onChange={(e)=>e.target.checked}
                      // checked={userData.gender === "female"}
                    />
                    <label className="form-input-radio"> Female</label>
                    </div>*/}
                    
                    <label className="form-input-label">Email Address</label> 
                    <br />
                    <br />
                    <input
                      className="form-input"
                      type="email"
                      name="email"
                      value={userData.email}
                      onChange={(e) =>
                        setUserData({ ...userData, email: e.target.value })
                      }
                      placeholder="email address"
                      readOnly={isReadOnly}
                    />
                    <br />
                    <br />
                    <label className="form-input-label">Phone Number</label>
                    <br />
                    <br />
                    <input
                      className="form-input"
                      type="number"
                      name="phone"
                      onChange={(e) =>
                        setUserData({ ...userData, phone: e.target.value })
                      }
                      value={userData.phone}
                      placeholder="mobile number"
                      readOnly={isReadOnly}
                    /><br/><br/>
                    <button className={editBtnVisiblity} onClick={updateUserData}>Save</button>
                  </form>
                </div>
              </div>
            </Card>
          </div>
        </Content>
      </Layout>
    </>
  );
}

export default Profile;
