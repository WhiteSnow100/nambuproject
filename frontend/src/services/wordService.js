import axiosInstance from "../utils/axiosInstance.js";

// 내 사전 조회
export const fetchWord = async (word, accessToken) => {
  console.log("2. fetchWord>>>>>>>>>", word);
  const response = await axiosInstance.get(`/word?word=${word}`);
  return response.data.data;
};

// chatGpt 조회
export const chatGpt = async (word, accessToken) => {
  const response = await axiosInstance.get(`/word?chatGpt=${word}`);
  return response.data.data;
};

// 저장
export const addWord = async (newWord, accessToken) => {
  try {
    const response = await axiosInstance.post("/word", newWord);
    return response.data.data;
  } catch (error) {
    console.error("Word 등록/수정 오류:", error.message);
  }
};

// 삭제
export const deleteWord = async (word, accessToken) => {
  const response = await axiosInstance.delete("/word", word, {});
};
