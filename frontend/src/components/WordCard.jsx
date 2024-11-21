import React, { useState } from "react";

const WordCard = ({ word, onNext }) => {
  const [isFlipped, setIsFlipped] = useState(false); // 카드의 앞/뒷면 상태

  // 카드 뒤집기
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  // 학습 레벨 선택 핸들러
  const handleLevelSelection = (level) => {
    onNext(level); // 다음 카드로 이동
    setIsFlipped(false); // 카드 초기화
  };

  return (
    <div style={cardContainerStyle}>
      <div
        style={{
          ...cardStyle,
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0)",
        }}
        onClick={handleFlip}
      >
        {!isFlipped ? (
          <div style={frontStyle}>
            <h2>{word.word}</h2>
          </div>
        ) : (
          <div style={backStyle}>
            <p>{word.description}</p>
            <div style={buttonContainerStyle}>
              <button
                style={{ ...buttonStyle, backgroundColor: "#4caf50" }}
                onClick={() => handleLevelSelection("상")}
              >
                상
              </button>
              <button
                style={{ ...buttonStyle, backgroundColor: "#ff9800" }}
                onClick={() => handleLevelSelection("중")}
              >
                중
              </button>
              <button
                style={{ ...buttonStyle, backgroundColor: "#f44336" }}
                onClick={() => handleLevelSelection("하")}
              >
                하
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// 스타일
const cardContainerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "20px",
};

const cardStyle = {
  width: "300px",
  height: "200px",
  perspective: "1000px",
  borderRadius: "10px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  cursor: "pointer",
  transformStyle: "preserve-3d",
  transition: "transform 0.6s",
};

const frontStyle = {
  position: "absolute",
  width: "100%",
  height: "100%",
  backfaceVisibility: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#4285f4",
  color: "white",
  borderRadius: "10px",
};

const backStyle = {
  position: "absolute",
  width: "100%",
  height: "100%",
  backfaceVisibility: "hidden",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#f1f1f1",
  color: "#333",
  transform: "rotateY(180deg)",
  borderRadius: "10px",
};

const buttonContainerStyle = {
  marginTop: "20px",
  display: "flex",
  gap: "10px",
};

const buttonStyle = {
  padding: "10px 20px",
  border: "none",
  borderRadius: "5px",
  color: "white",
  cursor: "pointer",
};

export default WordCard;
