import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; 
import axiosInstance from "../utils/axiosInstance"; // Axios 인스턴스 불러오기
import "../components/Header.css";

const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null); // 유저 데이터를 저장할 상태

  // 유저 데이터 가져오기
  useEffect(() => {
    const fetchUserData = async () => {
      if (user && user.email) {
        try {
          const response = await axiosInstance.get(`/api/level/email/${user.email}`); 
          setUserData(response.data); // 가져온 데이터 상태에 저장
          console.log(`header.jsx ${response.data.total_cnt} ${response.data.complete_cnt}`)
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };
    fetchUserData();
  }, [user]); // user가 변경될 때마다 실행
    
  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header className="header">
      {user ? (
        <div className="header-left"><p>Welcome, {user.email}</p>
        [ {userData && <p>Related Info: {userData.someField} ] </p>} {/* 유저 데이터 표시 */}
        </div>
      ) : (
        <div className="header-left">Welcome, Guest</div>
      )}
      <div className="header-right">
        <Link to="/">Home</Link>
        {user ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
