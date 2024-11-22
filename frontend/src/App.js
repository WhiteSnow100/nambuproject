import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import LogoutPage from "./pages/LogoutPage";

import User from "./pages/User";

import Word from "./pages/Word";
import Challenge from "./pages/Challenge";
import Dictionary from "./pages/Dictionary";

import Header from "./components/Header";
import { AuthProvider } from "./context/AuthContext";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} /> 
          <Route path="/signup" element={<SignupPage />} /> 
          <Route path="/logout" element={<LogoutPage />} /> 
          <Route path="/challenge" element={<Challenge />} />
          <Route path="/dictionary" element={<Dictionary />} />
          <Route path="/word" element={<Word />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
