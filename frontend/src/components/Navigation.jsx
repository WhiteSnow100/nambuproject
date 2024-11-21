// - 말입력/암기/사전/사용자
// - 각 메뉴에 링크
// - 선택메뉴는 칼라/미선택 메뉴에 대해서는 흰색
import React from "react";
import { NavLink } from "react-router-dom";
import './Navigation.css'; // 스타일링은 별도의 CSS 파일에서 관리

const Navigation = () => {
    return (
      <nav style={{ height: "50px", backgroundColor: "#ddd", display: "flex", justifyContent: "space-around", alignItems: "center" }}>
        {/* 각 링크는 /challenge 하위 경로로 이동 */}
        <NavLink to="../pages/challenge" style={linkStyle} activeStyle={activeLinkStyle}>말입력</NavLink>
        <NavLink to="../pages/challenge" style={linkStyle} activeStyle={activeLinkStyle}>암기</NavLink>
        <NavLink to="../pages/challenge" style={linkStyle} activeStyle={activeLinkStyle}>사전</NavLink>
        <NavLink to="../pages/challenge" style={linkStyle} activeStyle={activeLinkStyle}>사용자</NavLink>
      </nav>
    );
  };
  
  const linkStyle = {
    textDecoration: "none",
    color: "black",
    padding: "10px",
  };
  
  const activeLinkStyle = {
    color: "#4285f4",
    fontWeight: "bold",
  };
  
  export default Navigation;
