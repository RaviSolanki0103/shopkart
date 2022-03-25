import React from "react";
import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/Navbar";
import Container from "../utils/Container/Container";
import Sidebar from '../utils/sidebar/Sidebar';
import Address from "../components/manage-address/Address";

function ManageAddress() {
    return (
        <div>
            <Navbar />
            <Container>
            <Sidebar />  
                <Address />
            </Container>
        <Footer />
        </div>
    );
}

export default ManageAddress;
