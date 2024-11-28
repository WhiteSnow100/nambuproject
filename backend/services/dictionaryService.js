const dictionarydDao = require("../dao/dictionarydDao");

const upsertWord = async (data) => {
  return await dictionarydDao.upsertWord(data);
};

const updateWord = async (email, word, data) => {
  return await dictionarydDao.updateWord(email, word, data);
};

const fetchWordByEmail = async (email, word) => {
  try {
    return await dictionarydDao.fetchWordByEmail(email, word);
  } catch (error) {
    console.error("fetchWordByEmail 오류:", error.message);
  }
};

const fetchAllbyCategory = async (email, c_id) => {
  return await dictionarydDao.fetchAllbyCategory(email, c_id);
};

const deleteWord = async (email, word) => {
  return await dictionarydDao.deleteWord(email, word);
};

module.exports = {
  upsertWord,
  updateWord,
  fetchWordByEmail,
  fetchAllbyCategory,
  deleteWord,
};
