import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MemberList from "./components/MemberList";
import AdminDashboard from "./components/AdminDashboard";
import AddMember from "./pages/AddMember";
import Signup from "./pages/Signup";
import ForgetPass from "./pages/ForgetPass";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/members" element={<MemberList />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/add-member" element={<AddMember />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgetpass" element={<ForgetPass />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
