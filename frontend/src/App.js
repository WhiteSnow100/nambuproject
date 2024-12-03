import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { createTheme, ThemeProvider } from "@mui/material";

import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import LogoutPage from "./pages/LogoutPage";

import User from "./pages/UserPage"; 

import WordPage from "./pages/WordPage";
import Word from "./components/Word";
import Challenge from "./pages/Challenge";
import Dictionary from "./pages/Dictionary";
import UserEditPage from "./pages/UserEditPage";

import Header from "./components/Header";
import { AuthProvider } from "./context/AuthContext";

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "inherit", // 기본 스타일 제거
          textTransform: "none", // 텍스트 대문자 변환 방지
        },
      },
    },
  },
});

const App = () => {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
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
          <Route path="/wordPage" element={<WordPage />} />
          <Route path="/user" element={<User />} />
          <Route path="/edit-profile" element={<UserEditPage />} /> 
        </Routes>
      </Router>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;
