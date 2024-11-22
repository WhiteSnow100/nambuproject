import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const CategoryBox = ({ fetchData }) => {
  const [items, setItems] = useState([]);
  const [selectedValue, setSelectedValue] = useState("");

  useEffect(() => {
    // fetchData는 외부에서 데이터를 가져오는 함수로 전달됩니다.
    fetchData().then((data) => setItems(data));
  }, [fetchData]);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div style={styles.container}>
      <select
        style={styles.selectBox}
        value={selectedValue}
        onChange={handleChange}
      >
        <option value="">카테고리를 선택하세요.</option>
        {items.map((item) => (
          <option key={item.code} value={item.code}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};

CategoryBox.propTypes = {
  fetchData: PropTypes.func.isRequired, // 데이터를 가져오는 함수
};

export default CategoryBox;

const styles = {
  container: {
    width: "100%", // 부모 요소 크기에 따라 반응형
    maxWidth: "200px", // 최대 너비
  },
  selectBox: {
    width: "100%", // 너비를 부모에 맞춤
    height: "50px", // 최대 높이
    fontSize: "16px",
    padding: "5px",
    boxSizing: "border-box", // 패딩 포함 크기 계산
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
};
