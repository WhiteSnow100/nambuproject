// . login한 경우 : Home/LogOut
// . login안 한 경우1 : Home / LogIn / 가입하기 
// . Home/login/가입하기 : 각 화면 링크
// . LogOut : 사용자초기화하고 Home 링크
import React from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import './Header.css'; // 스타일링은 별도의 CSS 파일에서 관리

const Header = () => {
    // const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
      localStorage.clear(); // 토큰 초기화
      navigate("/"); // 홈으로 이동
    };

    const user = null;

    return (
      <header style={{ height: "50px", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 20px", backgroundColor: "#4285f4", color: "white" }}>
        {user ? (
          <>
            <span>사용자</span>
            <div>
              <Link to="/" style={{ margin: "0 10px", color: "white", textDecoration: "none" }}>홈</Link>
              <button onClick={handleLogout} style={{ background: "none", border: "none", color: "white", cursor: "pointer" }}>로그아웃</button>
            </div>
          </>
        ) : (
          <div>
            <Link to="/" style={{ margin: "0 10px", color: "white", textDecoration: "none" }}>홈</Link>
            <Link to="/login" style={{ margin: "0 10px", color: "white", textDecoration: "none" }}>로그인</Link>
            <Link to="/signup" style={{ margin: "0 10px", color: "white", textDecoration: "none" }}>회원가입</Link>
          </div>
        )}
      </header>
    );
  };

export default Header;
