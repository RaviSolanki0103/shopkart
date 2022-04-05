import React, { useEffect, useState } from "react";
import axios from "../../utils/axios-default-baseurl";
import { useSelector } from "react-redux";
import Toast from "../../utils/Toast";
import "./addressform.css";

function AddressForm(props) {
  const token = useSelector((state) => state.loginToken);
  const [records, setRecords] = useState([]);
  const [userAddress, setUserAddress] = useState({});
  const closeForm = (e) => {
    e.preventDefault();
    props.cancel();
  };
  

  const updateUserAddress = async (e) => {
    Toast({ msg: "Add Address Successfully", success: true })
    e.preventDefault();
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
  };

  // const [useraddress, setUseraddress] = useState({
  //   name: "",
  //   email: "",
  //   mobile: "",
  //   address: "",
  //   pincode: "",
  // });

  // const handleInput = (e) => {
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   setUseraddress({ ...useraddress, [name]: value });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (
  //     useraddress.name &&
  //     useraddress.email &&
  //     useraddress.mobile &&
  //     useraddress.address &&
  //     useraddress.pincode
  //   ) {
  //     Toast({ msg: "Add Address Successfully", success: true });
  //     console.log(useraddress);
  //     setRecords(true);
  //   } else {
  //     Toast({ msg: "Fill all Details", success: false });
  //     setRecords(false);
  //   }
  //   setUseraddress({
  //     name: "",
  //     email: "",
  //     mobile: "",
  //     address: "",
  //     pincode: "",
  //   });

  //   const newRecords = { ...useraddress, id: new Date().getTime().toString() };
  //   console.log(setRecords);
  //   setRecords([...records, newRecords]);
  // };

  return (
    <>
      <div>
        <form className="address-form" >
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
      <div className="user-add-details">
        

      </div>

      
    </>
  );
}

export default AddressForm;


// { records.map((item) => {
//   return (
//     <div>
//       <div className="dropdown-container" tabIndex="-1">
//         <div className="three-dots"></div>
//         <div className="dropdown">
//           <a href="#">
//             <div>Edit</div>
//           </a>
//           <a href="#">
//             <div>Delete</div>
//           </a>
//         </div>
//       </div>
//       <p>Name: {userAddress.name}</p>
//       <p>Address: {userAddress.address}</p>
//       <p>Pincode: {userAddress.pincode}</p>
//     </div>
//   );
// })}