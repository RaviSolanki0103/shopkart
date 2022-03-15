import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import { Route, Routes } from "react-router-dom";
import Contactus from "./components/Contactus";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Logout from "./components/Logout";

import Homepage from "./screens/Homepage";
import Wishlist from "./components/wishlist/Wishlist";
import WishlistCard from "./components/wishlist/WishlistCard";
import Routing from "./router/Routing.jsx";


function App() {
  return (
    <div className="App">
      {/* <Homepage /> */}
    <Routing/>      

      {/* <Navbar /> */}
      {/* <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contactus />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="logout" element={<Logout />} />
        <Route exact path="*" element={<Login />} />
      </Routes> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
