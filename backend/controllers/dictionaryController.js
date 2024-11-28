const dictionaryService = require("../services/dictionaryService");

const upsertWord = async (req, res) => {
  const { word, des, des_json, c_id, memo, url, input_type } = req.body;
  const email = "geenamam69@gmail.com"; // 테스트용 고정 이메일

  if (!word || !email) {
    return res.status(400).json({ message: "Word & Email are required." });
  }

  try {
    const [result, created] = await dictionaryService.upsertWord({
      email,
      word,
      des,
      des_json,
      c_id,
      memo,
      url,
      input_type,
    });

    if (created) {
      return res
        .status(201)
        .json({ message: "Word created successfully.", data: word });
    }
    return res
      .status(200)
      .json({ message: "Word updated successfully.", data: word });
  } catch (e) {
    console.error("Error in createOrUpdateWord:", e);
    return res
      .status(500)
      .json({ message: "CreateOrUpdateWord.", error: e.message });
  }
};

const fetchWordByEmail = async (req, res) => {
  const { word } = req.query;
  // const email = req.user;
  const email = "geenamam69@gmail.com";

  if (!word || !email) {
    return res.status(400).json({ message: "Word & Email are required." });
  }

  try {
    const dictionary = await dictionaryService.fetchWordByEmail(email, word);

    if (!dictionary) {
      return res.status(404).json({
        message: `No entry found for email: ${email} and word: ${word}`,
      });
    }
    res.status(200).json({ message: "Fetch word success", data: dictionary });
  } catch (e) {
    console.error("Error fetching word:", e);
    res.status(500).json({ message: "Fetch word error", error: e.message });
  }
};

const fetchAllbyCategory = async (req, res) => {
  const c_id = req.body;
  // const email = req.user;
  const email = "geenamam69@gmail.com";

  try {
    const dictionarys = await dictionaryService.fetchAllbyCategory(email, c_id);
    res.status(200).json({ message: "fetch words success", data: dictionarys });
  } catch (e) {
    res.status(500).json({ message: "fetch words error", data: e.message });
  }
};

const deleteWord = async (req, res) => {
  const word = req.body;
  // const email = req.user;
  const email = "geenamam69@gmail.com";
  try {
    const dictionary = await dictionaryService.deleteWord(email, word);
    res.staus(200).json({ message: "delete word success" });
  } catch (e) {
    res.status(500).json({ message: "delete word error", data: e.message });
  }
};

module.exports = {
  upsertWord,
  fetchWordByEmail,
  fetchAllbyCategory,
  deleteWord,
};
