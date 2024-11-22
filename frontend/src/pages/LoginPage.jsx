import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const LoginPage = () => {
  return (
    <div > 
      <div >
        <h2>Login Page</h2>
        {/* Login 관련 내용 */}
      </div>
    </div>
  );
};

// const LoginPage = () => {
//   const [username, setUsername] = useState("");
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     const userData = { name: username, token: "exampleToken123" }; // 예제 데이터
//     login(userData); // 로그인 처리
//     navigate("/"); // 로그인 후 Home으로 이동
//   };

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h1>Login</h1>
//       <input
//         type="text"
//         placeholder="Enter your name"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       <button onClick={handleLogin} style={{ marginLeft: "10px" }}>Login</button>
//     </div>
//   );
// };

export default LoginPage;

