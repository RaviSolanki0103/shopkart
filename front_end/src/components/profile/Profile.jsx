import React, { useEffect, useState } from "react";
import { Layout, Card } from "antd";
import "./profile.css";
import axios from "../../utils/axios-default-baseurl";
import { useSelector } from "react-redux";
import Sidebar from "../../utils/sidebar/Sidebar";
const { Content } = Layout;

function Profile() {
  const token = useSelector((state) => state.loginToken);
  const [isReadOnly, setIsReadOnly] = useState(true);
  const [userData, setUserData] = useState({});

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

  useEffect(() => {
    fetchUserData();
  }, []);

  const cancelEvent = () => {
    fetchUserData();
  };

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
                        onClick={() => setIsReadOnly(!isReadOnly)}
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
                    <label className="form-input-label">Gender</label>
                    <br />
                    <br />
                    <input
                      className="form-input-radio-btn"
                      type="radio"
                      name="gender"
                      value="male"
                    />
                    <label className="form-input-radio"> Male </label>
                    <input
                      className="form-input-radio-btn"
                      type="radio"
                      name="gender"
                      value="female"
                      defaultChecked={isReadOnly}
                    />
                    <label className="form-input-radio"> Female</label>
                    <br />
                    <br />
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
                    />
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
