import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import CreateListing from "./pages/CreateListing";
import Blog from "./pages/Blog";
import ExpertAdvice from "./pages/ExpertAdvice";
import Listing from "./pages/Listing";
import LeaveNoTrace from "./pages/LeaveNoTrace";
import Team from "./pages/Team";
import CampingTips from "./pages/CampingTips";
import Careers from "./pages/Careers";
import Legal from "./pages/Legal";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listing/new" element={<CreateListing />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/expertadvice" element={<ExpertAdvice />} />
        <Route path="/listing/:listingId" element={<Listing />} />
        <Route path="/leavenotrace" element={<LeaveNoTrace />} />
        <Route path="/team" element={<Team />} />
        <Route path="/campingtips" element={<CampingTips />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/legal" element={<Legal />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
