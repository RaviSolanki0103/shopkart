import { Button, Collapse, Radio, Result, Space } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BASEURL } from "../../utils/config";
import "./payment.css";

function Payment() {
  const token = useSelector((state) => state.loginToken);
  const [addressData, setAddressData] = useState([]);
  const [Value, setValue] = useState(1);
  const [colKey, setcolKey] = useState(1);
  const [totalOrder, setTotalOrder] = useState(false);
  const [orderValue, setOrderValue] = useState([]);
  const [userData, setUserData] = useState("");
  const [userAdd, setUserAdd] = useState("");
  const product_id = useSelector((state) => state.sendProductId);
  const amount = useSelector((state) => state.send_totalamount);
  const navigate = useNavigate();
  const fetchUserData = async () => {
    await axios
      .get("/api/user", {
        headers: {
          "Content-Type": "application/json",
          authorization: token,
        },
      })
      .then((res) => {
        setUserData(res.data.data._id);
        setAddressData(res.data.data.addresses);
      })
      .catch((err) => console.log("error: ", err));
  };

  const handleRadioChange = (e) => {
    setValue(e.target.value);
  };


  const sendOrderData = (id) => {
    axios.post("/api/order", {
      data: {
        products: [],
        total_price: 200,
        quantity: 1,
        status: "Ordered",
        user: userData,
        delivery_info: id,
      },
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
    });
  };

  const setArrayOrder = () => {
    setOrderValue(product_id.map((x) => x.product_id));
    setTotalOrder(true);
  };

  const getProducts = () => {
    axios
      .get("/api/getallproducts", {
        headers: {
          "Content-Type": "application/json",
          authorization: token,
        },
      })
      .then((res) => {
        typeof product_id[0].product_id === "string"
          ? setOrderValue(
              res.data.data.filter((x) => x._id === product_id[0].product_id)
            )
          : setArrayOrder();

      })
      .catch((err) => {
        if (err.response === 401) {
        } else {
          // Toast({ msg: err.message });
        }
      });
  };
  useEffect(() => {
    fetchUserData();
  }, []);

  const { Panel } = Collapse;

  return (
    <div>
      <Collapse
        defaultActiveKey={[`1`]}
        accordion
        activeKey={colKey}
      >
        <Panel header="DELIVERY ADDRESS" key="1">
          <Radio.Group
            onChange={handleRadioChange}
            value={Value}
            className="group"
          >
            <Space direction="vertical" className="space">
              {addressData.length &&
                addressData.map((userAddres, key) => {
                  return (
                    <div key={key} className="radio-div">
                      <Radio value={key + 1} className="radio">
                        <div className="radio-btn">
                          <p>
                            {userAddres.name} &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                            {userAddres.mobile}
                          </p>
                          <p>
                            {userAddres.address} &nbsp;&nbsp;&nbsp;{" "}
                            <b>{userAddres.pincode} </b>
                          </p>

                          {Value === key + 1 && (
                            <button
                              className="deliver-btn"
                              onClick={() => {
                                setcolKey(2);
                                setUserAdd(userAddres._id);
                                getProducts(userAddres._id);
                              }}
                            >
                              DELIVER HERE
                            </button>
                          )}
                        </div>
                      </Radio>
                    </div>
                  );
                })}
            </Space>
          </Radio.Group>
        </Panel>
        <Panel header="ORDER SUMMERY" key="2">
          {addressData
            .filter((data) => data._id === userAdd)
            .map((summery, key) => {
              let today = new Date();
              return (
                <div key={key}>
                  <p style={{ textAlign: "left" }}>
                    Product will be deliver to:<b> {summery.address}</b> on
                    &nbsp;&nbsp;
                    {today.getDate() +
                      5 +
                      "-" +
                      (today.getMonth() + 1) +
                      "-" +
                      today.getFullYear()}
                  </p>
                </div>
              );
            })}

          <div>
            {orderValue.map((order, key) => {
              return (
                <div className="order-div" key={key}>
                  <div className="left-img-div">
                    <img
                      className="img-order"
                      alt="example"
                      src={`${BASEURL}/uploads/${order.product_img}`}
                    />
                    <h3>
                      ₹ {order.price * product_id[key].quantity || order.price}{" "}
                    </h3>
                  </div>
                  <div className="right-detail-div">
                    <p>
                      <b> {order.name}</b>
                    </p>
                    <p>
                      Color: &nbsp;
                      {product_id[key].color || product_id[0].product_color}
                    </p>
                    <p>
                      Quantity: &nbsp;
                      {product_id[key].quantity ||
                        product_id[0].product_quantity}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div style={{ textAlign: "right" }}>
            <span className="total-amount">
              {" "}
              {totalOrder ? `Total: ₹${amount}` : ``}
            </span>
            <button
              className="deliver-btn"
              onClick={() => {
                setcolKey(3);
                // sendOrderData(user._id);
              }}
            >
              CONTINUE
            </button>
          </div>
        </Panel>
        <Panel header="PAYMENT OPTIONS" key="3">
          <p>
            <button
              onClick={() => {
                setcolKey(4);
              }}
            >
              PAY NOW
            </button>
          </p>
        </Panel>
        <Panel header="ORDER STATUS" key="4">
          <p>
            <Result
              status="success"
              title="Successfully Purchased, Order will be delivered soon."
              extra={
                <Button
                  type="primary"
                  key="console"
                  onClick={() => navigate("/")}
                >
                  Go to Homepage
                </Button>
              }
            />
          </p>
        </Panel>
      </Collapse>
    </div>
  );
}

export default Payment;
