const express = require("express");
const dictionaryController = require("../controllers/dictionaryController");
const router = express.Router();
// const {authenticate} = require("../middleware/auth_middleware")

// word, category 조회와 등록/수정을 모두 post로 method로 묶음
console.log(" dictionaryRoute.js router까지는 들어옴");
router.post("/type/:type", dictionaryController.postTypeBranch);
// router.post("/type", dictionaryController.upsertDictionary);
router.delete("/:id", dictionaryController.deleteDictionary);
// router.post("/type/:type", dictionaryController.findAllbyCategory);

module.exports = router;
