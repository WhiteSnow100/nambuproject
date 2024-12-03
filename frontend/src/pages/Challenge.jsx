import React, { useState } from "react";
import TabMenu from "../components/TabMenu"; 
import Category from "../components/Category";
import ChallengeViewer from "../components/ChallengeViewer";
import axiosInstance from "../utils/axiosInstance";
import "./Challenge.css"

const Challenge = () => {
  const [c_id, setCategoryId] = useState(null);
  const [limit, setLimit] = useState(10);
  const [dictionarys, setDictionarys] = useState([]);

  const handleFetchData = async () => {
    // console.log(`challenge.jsx 14line c_id:${c_id}, limit:${limit}`)
    if (!c_id || limit <= 0) {
      alert("카테고리를 선택하고 올바른 숫자를 입력하세요.");
      return;
    }

    try {
      const response = await axiosInstance.get(`/api/level/category?c_id=${c_id}&limit=${limit}`);
      if (response.status !== 200) {
        throw new Error('Failed to fetch data');
      }  
      const data = response.data.data;  // Axios는 `data`에 응답 본문이 포함됨

      // console.log(`challenge.jsx 27line ${data}`)
       
      const shuffledDictionarys = data.sort(() => Math.random() - 0.5); // 데이터 랜덤 섞기
    
      setDictionarys(shuffledDictionarys);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
 
  return (
    //<div className="page-container">
    <div>
      <TabMenu />
      <div className="search-container">
        <Category onSelect={setCategoryId} />
        <div className="number-input-container">
          <input 
            type="text"
            min="1"
            placeholder="숫자 입력"
            value="10"
            onChange={(e) => setLimit(e.target.value)}
          />
          <button onClick={handleFetchData}>조회</button>
        </div>
      </div>
      <div className="page-content">
        <ChallengeViewer dictionarys={dictionarys} />
      </div>
    </div>
  );
};

export default Challenge;






// import React, { useState } from "react";
// import TabMenu from "../components/TabMenu"; 
// import Category from "../components/Category";
// import ChallengeViewer from "../components/ChallengeViewer";
// import axiosInstance from "../utils/axiosInstance";
// import "./Challenge.css"; // 별도의 CSS 파일 import

// const Challenge = () => {
//   const [c_id, setCategoryId] = useState(null);
//   const [limit, setLimit] = useState(10);
//   const [dictionarys, setDictionarys] = useState([]);

//   const handleFetchData = async () => {
//     if (!c_id || limit <= 0) {
//       alert("카테고리를 선택하고 올바른 숫자를 입력하세요.");
//       return;
//     }

//     try {
//       const response = await axiosInstance.get(`/api/level/category?c_id=${c_id}&limit=${limit}`);
//       if (response.status !== 200) {
//         throw new Error('Failed to fetch data');
//       }  
//       const data = response.data.data;  // Axios는 `data`에 응답 본문이 포함됨
       
//       const shuffledDictionarys = data.sort(() => Math.random() - 0.5); // 데이터 랜덤 섞기
//       setDictionarys(shuffledDictionarys);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   return (
//     <div>
//       <TabMenu />
//       <div className="search-container">
//         <Category onSelect={setCategoryId} />
//         <div className="number-input-container">
//           <input 
//             type="text"
//             placeholder="숫자 입력"
//             value={limit}
//             onChange={(e) => {
//               const value = e.target.value;
//               if (/^\d*$/.test(value)) {
//                 setLimit(value);
//               }
//             }}
//           />
//           <button onClick={handleFetchData}>조회</button>
//         </div>
//       </div>
//       <div className="page-content">
//         <ChallengeViewer dictionarys={dictionarys} />
//       </div>
//     </div>
//   );
// };

// export default Challenge;
