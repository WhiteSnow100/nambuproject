import React, { useState } from "react";
import TabMenu from "../components/TabMenu";
import Category from "../components/Category";
import CategoryBox from "../components/CategoryBox";
import ChallengeViewer from "../components/ChallengeViewer";
import "./Challenge.css"

const Challenge = () => {
  const [categoryId, setCategoryId] = useState(null);
  const [numDictionarys, setNumDictionarys] = useState(10);
  const [dictionarys, setDictionarys] = useState([]);

  const handleFetchData = async () => {
    if (!categoryId || numDictionarys <= 0) {
      alert("카테고리를 선택하고 올바른 숫자를 입력하세요.");
      return;
    }

    try {
      const response = await fetch(`/api/dictionary?category=${categoryId}&limit=${numDictionarys}`);
      const data = await JSON.parse(response.json());
      // const response = `[
      //   { "word": "001", "des": "카테고리 1", "des_json":"", "level":10},
      //   { "word": "002", "des": "카테고리 2", "des_json":"", "level":10 },
      //   { "word": "003", "des": "카테고리 3", "des_json":"", "level":10 }
      // ]`;
  
      //const data = JSON.parse(response); 
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