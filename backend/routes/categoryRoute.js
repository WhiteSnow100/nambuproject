const express = require('express');
const categoryController = require('../controllers/categoryController');
const {check } = require('express-validator');
const router = express.Router();

router.post('/', [
    check('c_name').notEmpty().withMessage("Name is required")
], 
categoryController.createCategory);
router.put('/:c_id', [ check('c_name').notEmpty().withMessage("Name is required") ], categoryController.updateCategory);

router.delete('/:c_id', async (req, res) => {
    const { c_id } = req.params;
    try {
        // 이메일을 기준으로 카테고리 조회
        const category = await categoryController.findCategoryById(c_id);
        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }
        res.json(category); // 이메일에 해당하는 카테고리 응답
    } catch (error) {
        console.error("Error fetching category by id:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}); 
router.delete('/:email', async (req, res) => {
    const { email } = req.params;
    try {
        // 이메일을 기준으로 카테고리 조회
        const category = await categoryController.findCategoryByEmail(email);
        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }
        res.json(category); // 이메일에 해당하는 카테고리 응답
    } catch (error) {
        console.error("Error fetching category by id:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}); 

router.get('/:c_id', async (req, res) => {
    const { c_id } = req.params;
    try {
        // 이메일을 기준으로 카테고리 조회
        const category = await categoryController.findCategoryById(c_id);
        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }
        res.json(category); // 이메일에 해당하는 카테고리 응답
    } catch (error) {
        console.error("Error fetching category by id:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}); 

// '/:email' 경로로 이메일로 카테고리를 조회
router.get('/:email', async (req, res) => {
    const { email } = req.params;
    try {
        // 이메일을 기준으로 카테고리 조회
        const categorys = await categoryController.findCategoryByEmail(email);
        if (!categorys) {
            return res.status(404).json({ message: 'Category not found' });
        }
        res.json(category); // 이메일에 해당하는 카테고리 응답
    } catch (error) {
        console.error("Error fetching category by email:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

module.exports = router;
