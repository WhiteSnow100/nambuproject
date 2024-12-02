const express = require('express');
const levelController = require('../controllers/levelController');
const router = express.Router();

router.get('/category', levelController.findLevelByCategory);
router.get('/email/:email', levelController.findLevelByEmail);
router.put('/id/:id', levelController.updateLevelByID);

module.exports = router;
 