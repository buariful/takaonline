import { Route, Routes } from "react-router-dom";
import "./App.css";
import Admin from "./pages/Admin";
import BuyNow from "./pages/BuyNow";
// import Contact from "./pages/Contact";
// import Course from "./pages/Course";
import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Register from "./pages/Register";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        {/* <Route path="/courses" element={<Course />}></Route>
        <Route path="/contact" element={<Contact />}></Route> */}
        {/* <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Register />}></Route> */}
        <Route path="/buy" element={<BuyNow />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
      </Routes>
    </div>
  );
}

export default App;
