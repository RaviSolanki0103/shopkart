import React, { useEffect, useState } from 'react';

import { Layout, Card } from "antd";
import "./profile.css";
import axios from "../../utils/axios-default-baseurl";
import { useSelector } from "react-redux";
import Sidebar from '../../utils/sidebar/Sidebar';
const {  Content } = Layout;

function Profile() {
    const token = useSelector(state=>state.loginToken);
    console.log("token: ",token);
    const [isReadOnly, setIsReadOnly] = useState(true);

    const fetchUserData = async () => {
        await axios.get("/user",{headers: {'Content-Type': 'application/json','Authorization': `Bearer ${token}`}}).then(res=>console.log(res)).catch(err=> console.log(err));
    }

    useEffect(()=>{
        fetchUserData();
    },[]);

    const cancelEvent = () => {
        fetchUserData();
    }

    return (
        <>
            <Layout className="profile-page-layout">
            
                <Sidebar /> 
                <Content className="profile-page-content">
                    {/*<div className="margin-10-px order-list-of-card">*/}
                    <div>
                        <Card>
                            <div className="main-content" >
                                <div className="main-title">
                                    <h4>Personal Information {isReadOnly?<button className="editbtn" onClick={()=>setIsReadOnly(!isReadOnly)}>Edit</button>:<button className="editbtn" onClick={()=>cancelEvent()}>Cancel</button>}</h4>
                                </div>
                                <div className="infoform">
                                    <form className="profile-form">
                                        <label className="form-input-label">Name</label><br /><br />
                                        <input className="form-input" type="text" placeholder="Priya" readOnly={isReadOnly} />  
                                        <input className="form-input" type="text" placeholder="Patel" readOnly={isReadOnly} /> <br /><br />
                                        <label className="form-input-label">Gender</label><br /><br />
                                        <input className="form-input-radio-btn" type="radio" name="gender" value="male"  />
                                        <label className="form-input-radio"> Male </label>
                                        <input className="form-input-radio-btn" type="radio" name="gender" value="female"  defaultChecked={isReadOnly} />
                                        <label className="form-input-radio"> Female</label><br /><br />
                                        <label className="form-input-label">Email Address</label><br /><br />
                                        <input className="form-input" type="email" name="email" placeholder="priya@gmail.com" readOnly={isReadOnly} /><br /><br />
                                        <label className="form-input-label">Phone Number</label><br /><br />
                                        <input className="form-input" type="number" name="phone" placeholder="1234567890" readOnly={isReadOnly} />
                                    </form>
                                </div>
                            </div>
                        </Card>
                    </div>
                </Content>
            </Layout>

        </>




    )
}

export default Profile