import "./App.css";

import Routing from "./router/Routing.jsx";
import Homepage from "./screens/Homepage";
import Wishlist from "./screens/Wishlist";

function App() {
  return (
    <div className="App">
      {/* <Homepage /> */}
     <Wishlist />
    
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
