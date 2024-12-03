import { useState, useEffect } from "react";
import {
  fetchWord,
  addWord,
  deleteWord,
  fetchAllbyCategory,
} from "../services/wordService";

export const useWord = () => {
  const handlefetchWord = async (word) => {
    try {
      console.log("handlefetchWord>>>>>>>", word);
      const data = await fetchWord(word);
      return data;
    } catch (error) {
      console.error("Error fetching Word:", error);
    }
  };

  const handlefetchCategory = async (c_id, id) => {
    try {
      console.log("2. handlefetchCategory >>>>>>>>>", c_id, id);
      const data = await fetchAllbyCategory(c_id, id);
      return data;
    } catch (error) {
      console.error("Error fetching AllbyCategory:", error);
    }
  };

  const handleAddWord = async (newWord) => {
    try {
      console.log("handleAddWord>>>>>>>", newWord);
      await addWord(newWord);
    } catch (error) {
      console.error("Error adding word:", error);
    }
  };

  const handleDeleteWord = async (id, prevCardsData) => {
    try {
      console.log("handleDeleteWord>>>>>>>", id);

      await deleteWord(id);

      const updatedCardsData = prevCardsData.filter((card) => card.id !== id);

      console.log("handleDeleteWord nextCardsData", updatedCardsData);
      return updatedCardsData;
    } catch (error) {
      console.error("Error deleting word:", error);
      throw error;
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
    handleAddWord,
    handleDeleteWord,
    handleinitButton,
    handlefetchCategory,
  };
};
