const express = require('express');
const { updateDictionaryLevel } = require('../controllers/dictionaryController');
const router = express.Router();

router.put('/updateDictionaryLevel', updateDictionaryLevel);

module.exports = router;
