const express = require("express");
const dictionaryController = require("../controllers/dictionaryController");
const router = express.Router();
// const {authenticate} = require("../middleware/auth_middleware")

router.get("/", dictionaryController.fetchWordByEmail);
// router.getgpt("/word", dictionaryController.fetchWordByEmail);
router.post("/", dictionaryController.upsertWord);

// 사전 화면에서 올라오는 경우
router.delete("/dictionary", dictionaryController.deleteWord);
router.get("/dictionary", dictionaryController.fetchAllbyCategory);

module.exports = router;
