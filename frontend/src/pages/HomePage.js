import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

import Header from "./components/Header";
import HomeBody from "./components/HomeBody";
import Word from "Challenge";
import Challenge from "Challenge";
import Dictionary from "Challenge";

const HomePage = () => {
  const { user, totals, home, logout } = useAuth(); 
  
  return (
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/말입력" element={<Word />} />
            <Route path="/암기" element={<Challenge />} />
            <Route path="/사전" element={<Dictionary />} />
          </Routes>
        </Router>
      </AuthProvider>
  );
};

export default HomePage;

