import React, { useState, useEffect } from "react";
import { useAuth } from '../context/AuthContext';  // AuthContext import
import "../components/ChallengeViewer.css";

const ChallengeViewer = ({ dictionarys }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const { user } = useAuth(); // AuthContext에서 이메일 가져오기

  // dictionarys가 변경되면 currentIndex를 초기화
  useEffect(() => {
    setCurrentIndex(0);
    setIsFlipped(false);
  }, [dictionarys]);

  const handleFlip = (e) => {
    // level-selector 내에서의 클릭은 무시
    if (e.target.closest(".level-selector")) return;

    // 카드가 뒤집힌 상태라면 다음 카드로 이동
    if (isFlipped) {
      setCurrentIndex((prev) => prev + 1); // 다음 카드로 이동
      setIsFlipped(false); // 카드 초기화
    } else {
      setIsFlipped(true); // 카드 뒤집기
    }
  };

  const handleSelectLevel = async (level) => {
    const dictionary = dictionarys[currentIndex]; 

    if (!user) {
      console.error('사용자 내용이 없습니다.');
      return;
    }

    try {
        // 서버로 레벨 업데이트 요청
      await fetch(`/api/level/${dictionary.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          level,
          email: user.email,  // email은 AuthContext에서 가져온 사용자 이메일
        }),
      });
      
      setCurrentIndex((prev) => prev + 1); // 다음 카드로 이동
      setIsFlipped(false);  // 카드초기화
      
    } catch (error) {
      console.error("Error updating level:", error);
    }
  };

  if (currentIndex >= dictionarys.length) {
    return <p>모든 카드를 완료했습니다!</p>;
  }

  const dictionary = dictionarys[currentIndex];
  const backContent = dictionary.des_json || dictionary.des;

  return (
    <div className="dictionary-container" onClick={handleFlip}>
      <div className={`dictionary ${isFlipped ? "flipped" : ""}`}>
        {!isFlipped ? (
          <div className="dictionary-front">{dictionary.word}</div>
        ) : (
          <div className="dictionary-back">
            <p>{backContent}</p> 
            <div className="level-selector">
              <label>
                <input type="radio" name="level" value="10" checked={dictionary.level === 10}
                  onChange={() => handleSelectLevel(10)}
                />상</label>
              <label>
                <input type="radio" name="level" value="5" checked={dictionary.level === 5}
                  onChange={() => handleSelectLevel(5)}
                />중</label>
              <label>
                <input type="radio" name="level" value="0" checked={dictionary.level === 0}
                  onChange={() => handleSelectLevel(0)}
                />하</label>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChallengeViewer;
