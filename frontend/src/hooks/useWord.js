import { useState, useEffect } from "react";
import {
  fetchWord,
  chatGpt,
  addWord,
  deleteWord,
} from "../services/wordService";

export const useWord = () => {
  const handlefetchWord = async (word) => {
    try {
      const data = await fetchWord(word);
      return data;
    } catch (error) {
      console.error("Error fetching Word:", error);
    }
  };

  // const handlechatGpt = async (word) => {
  //   try {
  //     const data = await chatGpt(word);
  //     //서버에서 받아온 데이타 object 형태로 변경??
  //     return data;
  //   } catch (error) {
  //     console.error("Error chatGpt Answer:", error);
  //   }
  // };

  const handleAddWord = async (newWord) => {
    try {
      console.log("handleAddWord>>>>>>>", newWord);
      await addWord(newWord);
    } catch (error) {
      console.error("Error adding word:", error);
    }
  };

  const handleDeleteWord = async (word) => {
    try {
      await deleteWord(word);
    } catch (error) {
      console.error("Error deleting word:", error);
    }
  };

  const handleinitButton = () => {
    const data = {
      word: "",
      url: "",
      memo: "",
      level: 10,
      input_type: 1,
      email: "",
      des_json: null,
      des: "",
      c_id: "",
      c_data: null,
    };
    return data;
  };

  return {
    handlefetchWord,
    // handlechatGpt,
    handleAddWord,
    handleDeleteWord,
    handleinitButton,
  };
};
