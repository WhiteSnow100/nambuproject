import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const styles = {
  container: {
    textAlign: "center",
    marginTop: "2rem",
  },
  searchBox: {
    width: "50%",
    padding: "0.5rem",
    fontSize: "1.2rem",
    marginBottom: "1rem",
  },
  button: {
    margin: "0.5rem",
    padding: "0.5rem 1rem",
    fontSize: "1rem",
    cursor: "pointer",
  },
};

const HomeBody = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <input
        type="text"
        placeholder="단어를 입력하세요."
        style={styles.searchBox}
      />
      <div>
        <button style={styles.button} onClick={() => navigate("/page1")}>
          말입력
        </button>
        <button style={styles.button} onClick={() => navigate("/page2")}>
          암기
        </button>
        <button style={styles.button} onClick={() => navigate("/page3")}>
          사전
        </button>
      </div>
    </div>
  );
};

export default HomeBody;