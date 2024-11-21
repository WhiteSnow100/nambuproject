// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Header from "../components/Header";
import HomePageBody from "../components/HomePageBody";

import Login from "./Challenge";
import Signup from "./Challenge";

import Word from "./Challenge"; //  ./WordInput
import Challenge from "./Challenge";
import Dictionary from "./Challenge"; // ./Dictionary

const HomePage = () => {
  return (
    <Router>
      {/* Header는 항상 유지 */}
      <Header />
      <div /*className="body-container"*/>
        {/* Body 부분만 페이지 별로 변경 */}
        <Routes>
          <Route path="/" element={<HomePageBody />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/word" element={<Word />} />
          <Route path="/dictionary" element={<Dictionary />} />
          <Route path="/challenge" element={<Challenge />} />          
        </Routes>
      </div>
    </Router>
  );
};

export default HomePage;

