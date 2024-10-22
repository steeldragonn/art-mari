import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar/NavBar.js";
import Home from "./pages/Home.js";
import OrderList from "./pages/OrderList.js";
import WorksDetail from "./WorksDetail.js";
import Collections from "./pages/Collections.js";
import CollectionsDetail from "./pages/CollectionsDetail.js";
import EventsPage from "./pages/Events.js";
import Contact from "./pages/Contact.js";
import "./index.css";
import Works from "./pages/Works.js";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/collections/:id" element={<CollectionsDetail />} />
          <Route path="/orderlist" element={<OrderList />} />
          <Route path="/work/:id" element={<WorksDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
