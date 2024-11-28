const models = require("../models");

//말입력 신규 및 수정
const upsertWord = async (data) => {
  try {
    const result = await models.Dictionary.upsert(data, {
      returning: true, // 업데이트된 데이터를 반환받기 위해 추가
    });
    return result; // [result: Instance, created: boolean]
  } catch (error) {
    console.error("Error in upsertWord service:", error);
    throw new Error("Database upsert operation failed");
  }
};

// const createWord = async (data) => {
//   try {
//     return await models.Dictionary.create(data);
//   } catch (error) {
//     console.log("Error insert word", error);
//     throw error;
//   }
// };

//말입력 수정
const updateWord = async (email, word, data) => {
  try {
    return await models.Dictionary.update(data, {
      where: {
        email: email,
        word: word,
      },
    });
  } catch (error) {
    console.log("Error update word", error);
    throw error;
  }
};

//말입력 조회
const fetchWordByEmail = async (email, word) => {
  try {
    return await models.Dictionary.findOne({
      where: {
        email: email,
        word: word,
      },
    });
  } catch (error) {
    console.log("Error fetching data by word", error);
    throw error;
  }
};

//사전 화면을 위한 각 개인의 카테고리별 단어 전체 조회
const fetchAllbyCategory = async (email, c_id) => {
  try {
    return await models.Dictionary.findAll({
      where: {
        email: email,
        c_id: c_id,
      },
    });
  } catch (error) {
    console.log("Error fetching datas by category", error);
    throw error;
  }
};

const deleteWord = async (email, word) => {
  try {
    return await models.Dictionary.destroy({
      where: {
        email: email,
        word: word,
      },
    });
  } catch (error) {
    console.log("Error delete data by word", error);
    throw error;
  }
};

module.exports = {
  upsertWord,
  updateWord,
  fetchWordByEmail,
  fetchAllbyCategory,
  deleteWord,
};
