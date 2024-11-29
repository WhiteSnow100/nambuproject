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
      // const response = await axiosInstance.get(`/api/level?c_id=7&limit=10`);
      // //const response = await fetch(`/api/level?c_id=${c_id}&limit=${numDictionarys}`);
      // // const data = await JSON.parse(response.json());
      const response = `[
        { "id":7, "word": "고양이", "des": "반려동물1", "des_json":"", "level":10},
        { "id":8, "word": "개", "des": "시베리안 허스키", "des_json":"", "level":10},
        { "id":9, "word": "달팽이", "des": "느림보 친구", "des_json":"", "level":10}
      ]`;
  
      const data = JSON.parse(response); 
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