import React, { useState } from "react";
import CategorySelect from "./Category";
import WordCard from "./WordCard";

const ChallengeBody = () => {
  const [words, setWords] = useState([]); // 조회된 단어 데이터
  const [currentIndex, setCurrentIndex] = useState(0); // 현재 카드 인덱스

  // 단어 조회 함수
  const fetchWords = (category, count) => {
    // TODO: 서버에서 단어 데이터를 가져오는 API 호출
    const mockData = [
      { word: "apple", description: "A fruit" },
      { word: "table", description: "A piece of furniture" },
      { word: "car", description: "A vehicle" },
    ];
    setWords(mockData.slice(0, count)); // Mock 데이터 사용
    setCurrentIndex(0); // 첫 번째 카드부터 시작
  };

  // 현재 카드 갱신
  const handleNextCard = (level) => {
    // TODO: 서버에 학습 결과(level) 업데이트
    if (currentIndex < words.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      alert("모든 단어를 학습했습니다!");
    }
  };

  return (
    <div className="challenge-body">
      {/* 카테고리 선택 및 조회 */}
      <CategorySelect fetchWords={fetchWords} />

      {/* 카드 영역 */}
      {words.length > 0 && (
        <WordCard
          word={words[currentIndex]}
          onNext={handleNextCard}
        />
      )}
    </div>
  );
};

export default ChallengeBody;
