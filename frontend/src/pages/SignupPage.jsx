import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";


const SignUpPage = () => {
    return (
      <div > 
        <div >
          <h2>가입하기 Page</h2>
          {/* 회원가입 관련 내용 */}
        </div>
      </div>
    );
  };

// function SignUpPage() {

//     const handleLogin = () => {
//         const userData = { name: username, token: "exampleToken123" }; // 예제 데이터
//         login(userData); // 로그인 처리
//         navigate("/"); // 로그인 후 Home으로 이동
//       };

//     return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//         <h1>Login</h1>
//         <input
//         type="text"
//         placeholder="Enter your name"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//         />
//         <button onClick={handleLogin} style={{ marginLeft: "10px" }}>저장</button>
//     </div>
//     );
// }

export default SignUpPage;