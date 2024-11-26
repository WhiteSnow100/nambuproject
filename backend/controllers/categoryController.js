const categoryService = require('../services/categoryService');
const {validationResult} = require('express-validator'); // added
const models = require('../models'); // 모델을 불러오기

const createCategory = async (req, res) => {
    try{
        const errors = validationResult(req); // added 
        if(!errors.isEmpty()){ // added
            return res.status(400).json({errors: errors.array().map(e=>e.msg)});
        } // added
        const category = await categoryService.createCategory(req.body);
        res.status(201).json({data:category, message:'ok'});
    }catch(e){
        res.status(500).json({message: e.message});
    }
}

const findCategoryByEmail = async (email) => {
    try {
        // 이메일을 기준으로 카테고리 찾기
        const categorys = await models.Category.findAll({
            where: { email: email } // 이메일로 카테고리 찾기
        });
        return categorys;
    } catch (error) {
        console.error("Error in findCategoryByEmail:", error);
        throw error;
    }
};

const findCategoryById = async (c_id) => {
    try {
        // 이메일을 기준으로 카테고리 찾기
        const category = await models.Category.findOne({
            where: { c_id: c_id } // 이메일로 카테고리 찾기
        });
        return category;
    } catch (error) {
        console.error("Error in findCategoryById:", error);
        throw error;
    }
};

const deleteCategoryByEmail = async (email) => {
    try{
        const categorys = await categoryService.deleteCategoryByEmail(email); 
        res.status(200).json({data: categorys, message:'ok'});
    }catch(e){
        res.status(500).json({message: e});
    }
}

const deleteCategoryById = async (c_id)  => {
    try{
        const categorys = await categoryService.deleteCategoryById(c_id); 
        res.status(200).json({data: categorys, message:'ok'});
    }catch(e){
        res.status(500).json({message: e});
    }
}

const updateCategory = async (req, res) => {
    try{
        const errors = validationResult(req); // added 
        if(!errors.isEmpty()){ // added
            return res.status(400).json({errors: errors.array().map(e=>e.msg)});
        } // added
        const category = await categoryService.updateCategory(req.body);
        res.status(201).json({data:category, message:'ok'});
    }catch(e){
        res.status(500).json({message: e.message});
    }
}

module.exports = {
    createCategory,
    updateCategory, 
    findCategoryById,
    findCategoryByEmail,
    deleteCategoryById,
    deleteCategoryByEmail,
}
