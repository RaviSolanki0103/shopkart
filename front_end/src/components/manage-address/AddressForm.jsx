import React, { useState } from 'react';
import "./addressform.css";

function AddressForm(props) {

    const closeForm = (e) => {
        e.preventDefault();
       props.cancel()
    }

    const [records, setRecords] = useState(false);
    const [useraddress, setUseraddress] = useState({
        name: "",
        email: "",
        mobile: "",
        address: "",
        pincode: ""
    });

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value);
        setUseraddress({ ...useraddress, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (
            useraddress.name &&
            useraddress.email &&
            useraddress.mobile &&
            useraddress.address &&
            useraddress.pincode
        ) {
            alert(`Your data is saved`);
            console.log(useraddress);
            setRecords(true);
        } else {
            alert("Please Fill All The Details Given Below");
            setRecords(false);
        }
        setUseraddress(
            {
                name: "",
                email: "",
                mobile: "",
                address: "",
                pincode: ""
            })
            
            const newRecords = {...useraddress, id: new Date().getTime().toString()};
            console.log(setRecords);
            setRecords([...records, newRecords]);
    };

    return (
        <>
            <div>
                <form className="address-form">
                    <label className="addform-input-label">Name</label><br /><br />
                    <input className="addform-input" onChange={handleInput} name="name" type="text" placeholder="Enter Your Name" value={useraddress.name} required/>  <br /><br />
                    <label className="addform-input-label">Email </label><br /><br />
                    <input className="addform-input" onChange={handleInput} type="email" name="email" placeholder="Enter Your Email Address" value={useraddress.email} /><br /><br />
                    <label className="addform-input-label">Phone Number</label><br /><br />
                    <input className="addform-input" onChange={handleInput} type="number" name="mobile" placeholder="Enter Your Mobile Number" value={useraddress.mobile} /><br /> <br />
                    <label className="addform-input-label"> Address</label> <br /><br />
                    <input className="addform-input" onChange={handleInput} type="text" name="address" placeholder="Enter Your Address" value={useraddress.address} /><br /><br />
                    <label className="addform-input-label"> Pincode</label><br /><br />
                    <input className="addform-input" onChange={handleInput} type="number" name="pincode" placeholder="Enter pincode" value={useraddress.pincode} /><br /><br />
                    <button className="addform-save" onClick={handleSubmit}>Save</button>
                    <button className="addform-cancel" onClick={closeForm}>Cancel</button>
                </form>
            </div>
           { /*<div>
            {
                records.map((currElem)=>{
                    const {id,name,email,mobile,address,pincode} = currElem;
                    return(
                        <div>
                        <p>{currElem.name}</p>
                        <p>{currElem.email}</p>
                        <p>{currElem.mobile}</p>
                        <p>{currElem.address}</p>
                        <p>{currElem.pincode}</p>
                        </div>
                    )
                })
            }
        </div>*/}
        </>
    )
}

export default AddressForm