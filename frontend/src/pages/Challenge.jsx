import React, { useState } from "react";
import TabMenu from "../components/TabMenu"; 
import CategoryBox from "../components/CategoryBox";
import ChallengeViewer from "../components/ChallengeViewer";
import axiosInstance from "../utils/axiosInstance";
import "./Challenge.css"

const Challenge = () => {
  const [categoryId, setCategoryId] = useState(null);
  const [numDictionarys, setNumDictionarys] = useState(10);
  const [dictionarys, setDictionarys] = useState([]);

  const handleFetchData = async () => {
    // if (!categoryId || numDictionarys <= 0) {
    //   alert("카테고리를 선택하고 올바른 숫자를 입력하세요.");
    //   return;
    // }
    const c_id = 7;
    
    try {
      const response = await axiosInstance.get(`/api/level/category?c_id=7&limit=10`);
      if (response.status !== 200) {
        throw new Error('Failed to fetch data');
      }  
      const data = response.data.dictionarys;  // Axios는 `data`에 응답 본문이 포함됨

      // console.log(`challenge.jsx 27line ${data}`)
       
      const shuffledDictionarys = data.sort(() => Math.random() - 0.5); // 데이터 랜덤 섞기
    
      setDictionarys(shuffledDictionarys);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
 
  return (
    <div className="page-container">
      <TabMenu />
      <div className="search-container">
        <CategoryBox onSelect={setCategoryId} />
        <div className="number-input-container">
          <input 
            type="number"
            min="1"
            placeholder="숫자 입력"
            value="10"
            onChange={(e) => setNumDictionarys(e.target.value)}
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