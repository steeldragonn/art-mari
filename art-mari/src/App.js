import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Works from "./pages/Works.js";
import OrderList from "./pages/OrderList.js";
import "./App.css";
import "./index.css";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <img src="/mariLOGO.png" alt="logo" className="logo" /> */}
        <img src="/МАРІ.png" alt="logo" className="logo" />
        <NavBar />
        <div className="Content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/works" element={<Works />} />
            <Route path="/orderlist" element={<OrderList />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
