// import React, { useState } from "react";
import "./Home.css";
import homeImg from "../assets/home.png";
// import QuoteTyper from "../pages/QuoteTyper";

function Home() {
  return (
    <div className="home-container">
      <h1><b><i>Commercial Tax Department</i></b></h1>
      <h2>Welcome to IT Department Management System</h2>

      {/* <div className="quoteBox">
        Quote of the day
        <QuoteTyper />
      </div> */}

      <img src={homeImg} className="homeimg" alt="Home Page Illustration" />
    </div>
  );
}

export default Home;
