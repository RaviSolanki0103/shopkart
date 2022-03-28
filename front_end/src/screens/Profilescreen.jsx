import React from "react";
import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/Navbar";
import Profile from "../components/profile/Profile";
import Sidebar from '../utils/sidebar/Sidebar';
import Container from "../utils/Container/Container";

function Profilescreen() {
    return (
        <div>
            <Navbar />
            <Container>
            <Sidebar />  
            <Profile />
            </Container>
        <Footer />
        </div>
    );
}

export default Profilescreen;
