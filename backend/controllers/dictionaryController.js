const dictionaryService = require('../services/dictionaryService');
const {validationResult} = require('express-validator'); // added

const updateDictionaryLevel = async (req, res) => {
    const { email, word, level } = req.body;

    if (!email || !word || !level) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    // 데이터베이스 업데이트 로직
    try {
        // DB 연결 및 업데이트 로직
        res.status(200).json({ message: "Level updated successfully" });
    } catch (error) {
        res.status(500).json({ error: "Database error" });
    }
};

module.exports = { updateDictionaryLevel };
