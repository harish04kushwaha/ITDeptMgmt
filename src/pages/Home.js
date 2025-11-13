// import React from "react";
import "./Home.css";
import homeImg from "../assets/home.png";

function Home() {
  return (
    <>
      <div className="home-container">
        <h2>Welcome to IT Department Management System</h2>
        <p>
          This portal allows you to view and manage all IT department members.
          Admins can add, modify, or delete employee records.
        </p>
        <img src={homeImg} className="homeimg" alt="Home Page Illustration" />
      </div>
    </>
  );
}

export default Home;
