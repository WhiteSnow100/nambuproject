// 암기화면
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "../components/Navigation";
import ChallengeBody from "../components/ChallengeBody";
import DictionaryBody from "../components/ChallengeBody";
import UserBody from "../components/ChallengeBody";
import WordBody from "../components/ChallengeBody";


const Challenge = () => {
  return (
    <div className="challenge-container">
      {/* 상단 메뉴 */}
      <Navigation />

      {/* ChallengeBody의 콘텐츠를 라우팅 */}
      <Routes>
        <Route path="/challenge/dictionary" element={<DictionaryBody />} />
        <Route path="/challenge" element={<ChallengeBody />} />
        <Route path="/challenge/user" element={<UserBody />} />
        <Route path="/challenge/word" element={<WordBody />} />
      </Routes>
    </div>
  );
};

export default Challenge;
