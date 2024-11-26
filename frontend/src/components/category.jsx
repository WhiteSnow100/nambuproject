import React, { useState } from "react";
import "./Category.css";

const Category = ({ initialCategories, width = "200px", height = "40px" }) => {
  const [categories, setCategories] = useState(initialCategories);
  const [selectedCategory, setSelectedCategory] = useState(initialCategories[0]);
  //const [selectedCategory, setSelectedCategory] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [showWarning, setShowWarning] = useState(false); // 경고창 상태
console.log("에러")
  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const selectCategory = (category) => {
    setSelectedCategory(category);
    setIsOpen(false);
    setIsEditing(false);
  };

  const addCategory = () => {
    setIsEditing(true);
    setInputValue("");
  };

  const confirmAddCategory = () => {
    const trimmedValue = inputValue.trim();
    if (!trimmedValue) {
      setIsEditing(false);
      return;
    }
    if (categories.includes(trimmedValue)) {
      alert("이미 존재하는 목록입니다.");
      setIsEditing(false);
      return;
    }
    setCategories([...categories, trimmedValue]);
    setSelectedCategory(trimmedValue);
    setIsEditing(false);
  };

  const removeCategory = () => {
    if (categories.length === 1) {
      alert("최소 한 개의 카테고리는 있어야 합니다.");
      setShowWarning(false);
      return;
    }
    const updatedCategories = categories.filter((cat) => cat !== selectedCategory);
    setCategories(updatedCategories);
    setSelectedCategory(updatedCategories[0]);
    setShowWarning(false); // 경고창 닫기
  };

  const handleRemoveClick = () => setShowWarning(true); // 경고창 열기

  const cancelRemove = () => setShowWarning(false); // 경고창 닫기

  return (
    <div className="category-container" style={{ width }}>
      {/* 카테고리 선택 박스 */}
      <div className="category-box" style={{ height }}>
        {isEditing ? (
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onBlur={confirmAddCategory}
            onKeyDown={(e) => {
              if (e.key === "Enter") confirmAddCategory();
              if (e.key === "Escape") setIsEditing(false);
            }}
            className="category-input"
            placeholder="새 목록 입력"
            autoFocus
          />
        ) : (
          <span onClick={toggleDropdown}>{selectedCategory}</span>
        )}
        <span onClick={toggleDropdown}>{isOpen ? "▲" : "▼"}</span>
      </div>

      {/* 드롭다운 목록 */}
      {isOpen && (
        <ul className="category-dropdown" style={{ top: height }}>
          {categories.map((category) => (
            <li
              key={category}
              className="category-item"
              onClick={() => selectCategory(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      )}

      {/* +, - 버튼 */}
      <div className="button-group">
        <button className="add-button" onClick={addCategory}>
          +
        </button>
        <button className="remove-button" onClick={handleRemoveClick}>
          -
        </button>
      </div>

      {/* 경고 메시지 */}
      {showWarning && (
        <div className="warning-overlay">
          <div className="warning-box">
            <p>정말 삭제하시겠습니까?</p>
            <div className="warning-buttons">
              <button onClick={removeCategory}>확인</button>
              <button onClick={cancelRemove}>취소</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Category;
