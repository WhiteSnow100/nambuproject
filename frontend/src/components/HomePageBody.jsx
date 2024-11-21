import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
// import "./HomePageBody.css";

 
const HomePageBody  = () => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = React.useState("");

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <input
        type="text"
        placeholder="검색어를 입력하세요"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        style={{
          width: "50%",
          padding: "10px",
          fontSize: "16px",
          borderRadius: "5px",
          border: "1px solid #ddd",
        }}
      />
      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px", gap: "20px" }}>
        <button onClick={() => navigate("../pages/Challenge", { state: { query: searchText } })} style={buttonStyle}>말입력</button>
        <button onClick={() => navigate("../pages/Challenge")} style={buttonStyle}>암기</button>
        <button onClick={() => navigate("../pages/Challenge")} style={buttonStyle}>사전</button>
      </div>
    </div>
  );
};

const buttonStyle = {
    width: "60px",
    height: "60px",
    backgroundColor: "#4285f4",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };
  
  export default HomePageBody;