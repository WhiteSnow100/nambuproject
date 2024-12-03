const dictionarydDao = require("../dao/dictionaryDao");

const upsertDictionary = async (data) => {
  return await dictionarydDao.upsertDictionary(data);
};

const createDictionary = async (data) => {
  return await dictionarydDao.createDictionary(data);
};

const updateDictionary = async (email, word, data) => {
  return await dictionarydDao.updateDictionary(email, word, data);
};

const findWordByEmail = async (email, word) => {
  try {
    return await dictionarydDao.findWordByEmail(email, word);
  } catch (error) {
    console.error("fetchWordByEmail 오류:", error.message);
  }
};

const findAllbyCategory = async (email, c_id, id) => {
  return await dictionarydDao.findAllbyCategory(email, c_id, id);
};

const deleteDictionary = async (id) => {
  return await dictionarydDao.deleteDictionary(id);
};

module.exports = {
  upsertDictionary,
  createDictionary,
  updateDictionary,
  findWordByEmail,
  findAllbyCategory,
  deleteDictionary,
};
