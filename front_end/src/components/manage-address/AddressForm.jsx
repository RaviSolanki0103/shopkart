import React, {useState } from "react";
import axios from "../../utils/axios-default-baseurl";
import { useSelector } from "react-redux";
import Toast from "../../utils/Toast";
import "./addressform.css";

function AddressForm(props) {
  const token = useSelector((state) => state.loginToken);
  const [userAddress, setUserAddress] = useState({});
  const closeForm = (e) => {
    e.preventDefault();
    props.cancel();
  };

  const updateUserAddress = async (e) => {
    e.preventDefault();

    if(userAddress.fname == null){
      alert("Username is required!!")
    }else if(userAddress.email == null){
      alert("Email address is required!!")
    }else if(userAddress.mobile == null){
      alert("Mobile Number is required!!")
    }else if(userAddress.pincode == null){
      alert("Pincode is is required!!")
    }else if(userAddress.address == null){
      alert("Address is required!!")
    }else {
      Toast({ msg: "Add Address Successfully", success: true });
      console.log("user address updated....", JSON.stringify(userAddress));
      await axios
        .patch(
          "/user",
          {
            $push: {
              addresses: {
                address: userAddress.address,
                pincode: userAddress.pincode,
              },
            },
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

      props.change();
      props.handle();
    }
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
            value={userAddress.fname}
            onChange={(e) =>
              setUserAddress({ ...userAddress, fname: e.target.value })
            }
            name="name"
            type="text"
            placeholder="Enter Your Name"
            required
          />{" "}
          <br />
          <br />
          <label className="addform-input-label">Email </label>
          <br />
          <br />
          <input
            className="addform-input"
            type="email"
            name="email"
            placeholder="Enter Your Email Address"
            value={userAddress.email}
            onChange={(e) =>
              setUserAddress({ ...userAddress, email: e.target.value })
            }
          />
          <br />
          <br />
          <label className="addform-input-label">Phone Number</label>
          <br />
          <br />
          <input
            className="addform-input"
            type="number"
            name="mobile"
            placeholder="Enter Your Mobile Number"
            value={userAddress.mobile}
            onChange={(e) =>
              setUserAddress({ ...userAddress, mobile: e.target.value })
            }
          />
          <br /> <br />
          <label className="addform-input-label"> Address</label> <br />
          <br />
          <input
            className="addform-input"
            type="text"
            name="address"
            placeholder="Enter Your Address"
            value={userAddress.address}
            onChange={(e) =>
              setUserAddress({ ...userAddress, address: e.target.value })
            }
          />
          <br />
          <br />
          <label className="addform-input-label"> Pincode</label>
          <br />
          <br />
          <input
            className="addform-input"
            type="number"
            name="pincode"
            placeholder="Enter pincode"
            value={userAddress.pincode}
            onChange={(e) =>
              setUserAddress({ ...userAddress, pincode: e.target.value })
            }
          />
          <br />
          <br />
          <button className="addform-save" onClick={updateUserAddress}>
            Save
          </button>
          <button className="addform-cancel" onClick={closeForm}>
            Cancel
          </button>
        </form>
      </div>
  
    </>
  );
}

export default AddressForm;
