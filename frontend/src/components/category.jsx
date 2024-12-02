import React, { useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance";
import { useAuth } from "../context/AuthContext";
import "./category.css";

const Category = ({ 
  email,
  initialCategories = [], 
  onSelect = () => {}, //기본값 추가: 부모로 선택된 ID 전달
  width = "400px", 
  height = "50px" 
}) => {
  const [categories, setCategories] = useState(initialCategories);
  const [selectedCategory, setSelectedCategory] = useState(initialCategories[0] || null);
  //const [selectedCategory, setSelectedCategory] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [showWarning, setShowWarning] = useState(false); // 경고창 상태
 
  const { user } = useAuth();
  useEffect(()=>{    
      const fetchCategories = async() => {   
        const userEmail = email || user.email;   
      if(!userEmail){
        console.warn("Email is required but not provided.");
        return;
      }
    try{
      // console.log(`category.jsx_30 : ${userEmail}`)
      const response = await axiosInstance.get(`/category/email`); //백엔드에서 데이터 가져오기
      const categories = response.data.categories;
      console.log("Fetched categories:", JSON.stringify(response.data.categories, null, 2));
      if (!Array.isArray(categories) || categories.length === 0) {
        console.warn("No categories found.");
        setCategories([]);
        return;
      }
      
      if(Array.isArray(response.data.categories)){
        console.log("category.jsx 24번째줄"+response.data.categories);
        console.log("category.jsx 24번째줄", JSON.stringify(response.data.categories, null, 2));

        setCategories(response.data.categories); //데이터 상태 업데이트
        if(response.data.length > 0){
          const firstCategory = response.data.categories[0]; //첫번째 카테고리 선택
          setSelectedCategory(firstCategory.id); //ID 저장
          onSelect(firstCategory.id); //부모 컴포넌트에 전달
          console.log("Selected category ID in Category:", firstCategory?.id);

        }
      }else{
        console.error("Expected an array but got:", response.data.categories);
        setCategories([]); //빈 배열로 초기화
      }      
    }catch(error){
      console.error("Error fetching categories:", error);
    }
  };
  
  fetchCategories();
}, [onSelect, email]); 

  
  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const selectCategory = (category) => {
    setSelectedCategory(category.id); //ID 저장
    
    console.log("category.jsx 66번째줄"+category.id);

    onSelect(category.id);
    setIsOpen(false);
    setIsEditing(false);
  };

  const addCategory = () => {
    setIsEditing(true);
    setInputValue("");
  };

  const confirmAddCategory = async () => {
    const trimmedValue = inputValue.trim();
    const email= `${user.email}`;

    if (!trimmedValue) {
      setIsEditing(false);
      return;
    }
    if (categories.includes(trimmedValue)) {
      alert("이미 존재하는 목록입니다.");
      setIsEditing(false);
      return;
    }
    
    // if (categories.some((cat) => cat.c_name === trimmedValue)) {
    //   alert("이미 존재하는 목록입니다.");
    //   setIsEditing(false);
    //   return;
    // }

    try{
      const response = await axiosInstance.post('/category/create', {
        c_name: trimmedValue, // 새 카테고리 이름 전달
        email
      });

      //백엔드에서 반환된 새로운 카테고리를 상태에 추가
      const newCategory = response.data.categories; // 백엔드에서 새 카테고리 객체 반환
      setCategories([...categories, newCategory]); // 기존 상태에 새 카테고리 추가
      setSelectedCategory(newCategory.id); // 새로 추가된 카테고리를 선택
      onSelect(newCategory.id); //부모로 전달
      setIsEditing(false);
    }catch(error){
      console.error("Error adding category:", error);
    }    
  };

  const removeCategory = async () => {
    if (categories.length === 1) {
      alert("최소 한 개의 카테고리는 있어야 합니다.");
      setShowWarning(false);
      return;
    }

    try{
      await axiosInstance.delete(`/category/${selectedCategory}`); //삭제 요청
      const updatedCategories = categories.filter(
        (cat) => cat.id !== selectedCategory
      );
      setCategories(updatedCategories);
      setSelectedCategory(updatedCategories[0]);
      setShowWarning(false); // 경고창 닫기
    }catch(error){
      console.error("Error removing category", error);
    }    
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
          <span onClick={toggleDropdown}>
            {selectedCategory
              ? categories.find((cat)=> cat.id === selectedCategory)?.c_name
              : "카네고리를 선택하세요"}
          </span>
        )}
        <span onClick={toggleDropdown}>{isOpen ? "▲" : "▼"}</span>
      </div>

      {/* 드롭다운 목록 */}
      
      {isOpen && categories.length > 0 && (
        <ul className="category-dropdown" style={{ top: height }}>
          {categories.map((category) => (
            <li
              key={category.id}
              className="category-item"
              onClick={() => selectCategory(category)}
            >
              {category.c_name}
            </li>
          ))}
        </ul>
      )}

      {/* +, - 버튼 */}
      <div className="buttons">
        <button className="add-btn" onClick={addCategory}>
          +
        </button>
        <button className="remove-btn" onClick={handleRemoveClick}>
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
