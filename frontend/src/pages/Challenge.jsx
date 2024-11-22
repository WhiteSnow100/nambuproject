import React from "react";
import TabMenu from "../components/TabMenu";
import CategoryBox from "../components/CategoryBox";

const Challenge = () => {
  const fetchData = async () => {
    return [
      { code: "001", name: "Option 1" },
      { code: "002", name: "Option 2" },
      { code: "003", name: "Option 3" },
    ];
  };
  
  return (
    <div className="page-container">
      <TabMenu />
      <div style={{ padding: "20px" }}>
        <CategoryBox fetchData={fetchData} />
      </div>
      <div className="page-content">
        <h2>Challenge Page</h2>
        {/* Challenge 관련 내용 */}
      </div>
    </div>
  );
};

export default Challenge;
