import React, { useEffect, useState } from "react";
import { Layout, Card } from "antd";
import AddressForm from "../manage-address/AddressForm";
import Sidebar from "../../utils/sidebar/Sidebar";
import "./address.css";
import { PlusCircleOutlined } from "@ant-design/icons";
import axios from "axios";
import { useSelector } from "react-redux";
const { Content } = Layout;

function Address() {
  const token = useSelector((state) => state.loginToken);
  const [open, setIsOpen] = useState(false);
  const [records, setRecords] = useState([]);
  const [status, setstatus] = useState(false);
  const [first, setfirst] = useState(true);

  const getUserAddress = () => {
    axios
      .get("/api/user", {
        headers: {
          "Content-Type": "application/json",
          authorization: token,
        },
      })
      .then((res) => {
        setRecords(res.data.data.addresses);
        console.log(res.data.data.addresses, "res");
      });
  };

  const deleteAddress = (item) => {
      console.log("hello", );
    axios
      .delete(`/api/user/`, {
        headers: {
          "Content-Type": "application/json",
          authorization: token,
        },
      })
      .then((res) => {
        setRecords(res.data.data.addresses.address._id);
        console.log(res.data.data.addresses.address._id, "res");
      });
  };

  useEffect(() => {
    getUserAddress();
  }, [status]);

  const change = (i) => {
    setstatus(!status);
  };
  const handleform = () => {
    setIsOpen(!open);
  };

  return (
    <>
      <Layout className="address-page-layout">
        <Sidebar />
        <Content>
          <div className="address-contentdiv">
            <Card>
              <p className="card-title">Manage Addresses</p>
            </Card>
            <Card>
              <button
                onClick={() => setIsOpen(!open)}
                className="add-address"
                type="button"
              >
                <PlusCircleOutlined /> ADD NEW ADDRESS
              </button>
            </Card>
            {open && (
              <AddressForm
                cancel={() => setIsOpen(!open)}
                change={change}
                handle={handleform}
              />
            )}

            <Card>
              {records.map((item, key) => {
                return (
                  <div key={key} className="address-div">
                    <div>
                      <div className="dropdown-container" tabIndex="-1">
                        <div className="three-dots"></div>
                        <div className="dropdown">
                          <div>
                            <button className="edit-btn">Edit</button>
                          </div>
                          <div>
                            <button
                              className="delete-btn"
                              onClick={() => deleteAddress(item.user_id._id)}
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="user-details">
                      {item.address} <br />
                      {item.pincode}
                    </p>
                  </div>
                );
              })}
            </Card>
          </div>
        </Content>
      </Layout>
    </>
  );
}
export default Address;
