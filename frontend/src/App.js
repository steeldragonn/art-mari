import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar/NavBar.js";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Works from "./pages/Works.js";
import OrderList from "./pages/OrderList.js";
import WorksDetail from "./WorksDetail.js";
// import Footer from "./components/footer/Footer.js";
import "./index.css";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
          <Route path="/orderlist" element={<OrderList />} />
          <Route path="/work/:id" element={<WorksDetail />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
