// . login한 경우 : Home/LogOut
// . login안 한 경우1 : Home / LogIn / 가입하기 
// . Home/login/가입하기 : 각 화면 링크
// . LogOut : 사용자초기화하고 Home 링크
import React from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

const styles = {
    header: {
      backgroundColor: "#282c34",
      padding: "1rem",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      color: "white",
    },
    link: {
      margin: "0 1rem",
      color: "white",
      textDecoration: "none",
      fontSize: "1.2rem",
    },
  };
 
const Header = () => {
    const { user, totalword, zerocount, logout } = useAuth();
    if (!user) {
        <header style={styles.header}>
        <nav>
            <Link to="/HomePage" style={styles.link}>
            Home
            </Link>
            <Link to="/HomePage" style={styles.link}>
            Login
            </Link>
            <Link to="/HomePage" style={styles.link}>
            가입하기
            </Link>            
        </nav>
        </header>
    }else{
        <header style={styles.header}>
        <nav>
            <div>user</div>
            <div>totalword</div>
            <div>zerocount</div>
            <Link to="/HomePage" style={styles.link}>
                Home
            </Link>
            <Link to="/HomePage" style={styles.link}>
                Logout
            </Link>
        </nav>
        </header> 
    }
  };
  
export default Header;
