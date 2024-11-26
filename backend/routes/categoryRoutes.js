const express = require('express');
const { createCategory, updateCategory, deleteCategoryById, deleteCategoryByEmail, findCategoryById, findCategoryByEmail } = require('../controllers/categoryController');
const {check } = require('express-validator');
const router = express.Router();

router.post('/createCategory', [
    check('c_name').notEmpty().withMessage("Name is required")
], 
    createCategory);
router.put('/updateCategory', [ check('c_name').notEmpty().withMessage("Name is required") ], updateCategory);

router.delete('/c_id/:c_id', async (req, res) => {
    const { c_id } = req.params;
    try {
        // 이메일을 기준으로 카테고리 조회
        const category = await findCategoryById(c_id);
        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }
        res.json(category); // 이메일에 해당하는 카테고리 응답
    } catch (error) {
        console.error("Error fetching category by id:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}); 
router.delete('/email/:email', async (req, res) => {
    const { email } = req.params;
    try {
        // 이메일을 기준으로 카테고리 조회
        const category = await findCategoryById(email);
        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }
        res.json(category); // 이메일에 해당하는 카테고리 응답
    } catch (error) {
        console.error("Error fetching category by id:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}); 

router.get('/c_id/:c_id', async (req, res) => {
    const { c_id } = req.params;
    try {
        // 이메일을 기준으로 카테고리 조회
        const category = await findCategoryById(c_id);
        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }
        res.json(category); // 이메일에 해당하는 카테고리 응답
    } catch (error) {
        console.error("Error fetching category by id:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}); 

// '/email/:email' 경로로 이메일로 카테고리를 조회
router.get('/email/:email', async (req, res) => {
    const { email } = req.params;
    try {
        // 이메일을 기준으로 카테고리 조회
        const category = await findCategoryByEmail(email);
        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }
        res.json(category); // 이메일에 해당하는 카테고리 응답
    } catch (error) {
        console.error("Error fetching category by email:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

module.exports = router;
