import React, { useState } from "react";
import Toast from "../../utils/Toast";
import "./addressform.css";

function AddressForm(props) {
  const closeForm = (e) => {
    e.preventDefault();
    props.cancel();
  };

  const [records, setRecords] = useState([]);
  const [useraddress, setUseraddress] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    pincode: "",
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUseraddress({ ...useraddress, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      useraddress.name &&
      useraddress.email &&
      useraddress.mobile &&
      useraddress.address &&
      useraddress.pincode
    ) {
      Toast({ msg: "Add Address Successfully", success: true });
      console.log(useraddress);
      setRecords(true);
    } else {
      Toast({ msg: "Fill all Details", success: false });
      setRecords(false);
    }
    setUseraddress({
      name: "",
      email: "",
      mobile: "",
      address: "",
      pincode: "",
    });

    const newRecords = { ...useraddress, id: new Date().getTime().toString() };
    console.log(setRecords);
    setRecords([...records, newRecords]);
  };

  return (
    <>
      <div>
        <form className="address-form">
          <label className="addform-input-label">Name</label>
          <br />
          <br />
          <input
            className="addform-input"
            onChange={handleInput}
            name="name"
            type="text"
            placeholder="Enter Your Name"
            value={useraddress.name}
            required
          />{" "}
          <br />
          <br />
          <label className="addform-input-label">Email </label>
          <br />
          <br />
          <input
            className="addform-input"
            onChange={handleInput}
            type="email"
            name="email"
            placeholder="Enter Your Email Address"
            value={useraddress.email}
          />
          <br />
          <br />
          <label className="addform-input-label">Phone Number</label>
          <br />
          <br />
          <input
            className="addform-input"
            onChange={handleInput}
            type="number"
            name="mobile"
            placeholder="Enter Your Mobile Number"
            value={useraddress.mobile}
          />
          <br /> <br />
          <label className="addform-input-label"> Address</label> <br />
          <br />
          <input
            className="addform-input"
            onChange={handleInput}
            type="text"
            name="address"
            placeholder="Enter Your Address"
            value={useraddress.address}
          />
          <br />
          <br />
          <label className="addform-input-label"> Pincode</label>
          <br />
          <br />
          <input
            className="addform-input"
            onChange={handleInput}
            type="number"
            name="pincode"
            placeholder="Enter pincode"
            value={useraddress.pincode}
          />
          <br />
          <br />
          <button className="addform-save" onClick={handleSubmit}>
            Save
          </button>
          <button className="addform-cancel" onClick={closeForm}>
            Cancel
          </button>
        </form>
      </div>
      <div className="user-add-details">
        {records.map((currElem) => {
          const { id, name, address, pincode } = currElem;
          return (
            <div>
              <div className="dropdown-container" tabIndex="-1">
                <div className="three-dots"></div>
                <div className="dropdown">
                  <a href="#">
                    <div>Edit</div>
                  </a>
                  <a href="#">
                    <div>Delete</div>
                  </a>
                </div>
              </div>
              <p>Name: {name}</p>
              <p>Address: {address}</p>
              <p>Pincode: {pincode}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default AddressForm;
