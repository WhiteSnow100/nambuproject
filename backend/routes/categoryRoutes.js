const express = require('express');
const { createCategory, updateCategory, deleteCategoryById, deleteCategoryByEmail, findCategoryById, findCategoryByEmail } = require('../controllers/categoryController');
const {check } = require('express-validator')
const router = express.Router();

router.post('/createCategory', [
    check('c_name').notEmpty().withMessage("Name is required")
], 
    createCategory);
router.put('/updateCategory', [ check('c_name').notEmpty().withMessage("Name is required") ], updateCategory);
router.delete('/deleteCategoryById', deleteCategoryById);
router.delete('/deleteCategoryByEmail', deleteCategoryByEmail);
router.get('/findCategoryById', findCategoryById);
router.get('/findCategoryByEmail', findCategoryByEmail); 

module.exports = router;
