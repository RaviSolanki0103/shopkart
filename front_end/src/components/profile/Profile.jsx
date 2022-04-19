import React, { useEffect, useState } from "react";
import { Layout, Form, Card, Input, Modal, Button } from "antd";
import { Link } from "react-router-dom";
import "./profile.css";
import Toast from "../../utils/Toast";
import axios from "../../utils/axios-default-baseurl";
import { useSelector } from "react-redux";
import Sidebar from "../../utils/sidebar/Sidebar";

const { Content } = Layout;


function Profile() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const token = useSelector((state) => state.loginToken);
  const [pwd, setPwd] = useState("");
  const [newPwd, setNewPwd] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const [isReadOnly, setIsReadOnly] = useState(true);
  const [userData, setUserData] = useState({});
  const [editBtnVisiblity, setEditBtnVisiblity] = useState("btn-display-none");

  //Modal
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  //profile
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
    Toast({ msg: "Data updated successfully", success: true });
    console.log("user data updated....", JSON.stringify(userData));
    await axios
      .patch(
        "/user",
        {
          fname: userData.fname,
          lname: userData.lname,
          email: userData.email,
          phone: userData.phone,
        },
        {
          headers: {
            "Content-Type": "application/json",
            authorization: token,
          },
        }
      )
      .then((res) => console.log("response from update data", res))
      .catch((err) => console.log("error: ", err));
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const cancelEvent = () => {
    fetchUserData();
    setIsReadOnly(!isReadOnly);
    setEditBtnVisiblity("btn-display-none");
  };

  // const SubmitpwdForm = () =>{
  //   setIsModalVisible(false);
  //   Toast({ msg: "Password updated successfully", success: true });
  //   console.log("submitpwd");
   
  // }
  
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
                        onClick={() => {
                          setIsReadOnly(!isReadOnly);
                          setEditBtnVisiblity("btn-display-block");
                        }}
                      >
                        Edit
                      </button>
                    ) : (
                      <button className="editbtn" onClick={() => cancelEvent()}>
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

                    <label className="form-input-label">Email Address </label>
                    <Button className="changepwdbtn" onClick={showModal}>
                      Change Password
                    </Button>
                    <div>
                      <Modal
                        className="modalstyle"
                        visible={isModalVisible}
                        onOk={handleOk}
                        onCancel={handleCancel}
                        title="Change Password"
                        footer={null}
                      >
                        <Form className="changepwdform">
                          <Form.Item
                            value={pwd}
                            onChange={(e) => setPwd(e.target.value)}
                            name="oldpwd"
                            label="Enter your old password"
                            rules={[
                              {
                                required: true,
                                message: "This field is required",
                              },
                            ]}
                          >
                            <Input />
                          </Form.Item>

                          <Form.Item
                            name="newpwd"
                            label="Enter your new password"
                            value={newPwd}
                            onChange={(e) => setNewPwd(e.target.value)}
                            rules={[
                              {
                                required: true,
                                message: "This field is required",
                              },
                            ]}
                          >
                            <Input />
                          </Form.Item>

                          <Form.Item
                            name="confirmPwd "
                            label="Enter Confirm Password"
                            value={confirmPwd}
                            onChange={(e) => setConfirmPwd(e.target.value)}
                            rules={[
                              {
                                required: true,
                                message: "This field is required",
                              },
                            ]}
                          >
                            <Input />
                          </Form.Item>
                          <br />
                          <Form.Item>
                            <Button
                              type="primary"
                              htmlType="submit"
                              className="changepwd-form-button"
                              
                            >
                              Submit
                            </Button>
                          </Form.Item>
                        </Form>
                      </Modal>
                    </div>
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
                    />
                    <br />
                    <br />
                    <button
                      className={editBtnVisiblity}
                      onClick={updateUserData}
                    >
                      Save
                    </button>
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
