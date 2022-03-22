import React from "react";
import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/Navbar";
import Profile from "../components/profile/Profile";
import Container from "../utils/Container/Container";

function Profilescreen() {
    return (
        <div>
            <Navbar />
            <Container>
                <Profile />
            </Container>
        <Footer />
        </div>
    );
}

export default Profilescreen;
