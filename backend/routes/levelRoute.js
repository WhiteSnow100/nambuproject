const express = require('express');
const levelController = require('../controllers/levelController');
const router = express.Router();

router.get('/', levelController.findLevelByCategory);
router.put('/:id', levelController.updateLevelByID);

module.exports = router;
 