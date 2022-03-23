import React from 'react';
import "./form.css";
function Form() {
    return (
        <>
            <div>
                <form className="address-form">
                    <label className="addform-input-label">Name</label><br /><br />
                    <input className="addform-input" type="text" placeholder="Enter Your Firstname"  />  <input className="form-input" type="text" placeholder="Enter Your Lastname"  /> <br /><br />
                    <label className="addform-input-label">Gender</label><br /><br />
                    <input className="addform-input-radio-btn" type="radio" name="gender" value="male" />
                    <label className="addform-input-radio"> Male </label>
                    <input className="addform-input-radio-btn" type="radio" name="gender" value="female" checked />
                    <label className="addform-input-radio"> Female</label><br /><br />
                    <label className="addform-input-label">Email Address</label><br /><br />
                    <input className="addform-input" type="email" name="email" placeholder="Enter Your Email Address"  /><br /><br />
                    <label className="addform-input-label">Phone Number</label><br /><br />
                    <input className="addform-input" type="number" name="phone" placeholder="Enter Your Mobile Number" /><br /> <br />
                    <button className="addform-save">Save</button>
                    <button className="addform-cancel">Cancel</button>
                </form>
            </div>
        </>
    )
}

export default Form