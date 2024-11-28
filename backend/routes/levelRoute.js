const express = require('express');
const levelController = require('../controllers/levelController');
const router = express.Router();


router.put('/:id', levelController.updateLevel); 
router.get('/:email', levelController.findLevelByEmail);

module.exports = router;
 