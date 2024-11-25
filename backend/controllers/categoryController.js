const categoryService = require('../services/categoryService');
const {validationResult} = require('express-validator'); // added

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

const findCategoryByEmail = async (req, res) => {
    try{
        const categorys = await categoryService.findCategoryByEmail(req.email); 
        res.status(200).json({data: categorys, message:'ok'});
    }catch(e){
        res.status(500).json({message: e});
    }
}

const findCategoryById = async (req, res) => {
    try{
        const categorys = await categoryService.findCategoryById(req.c_id);
        // const users = await models.User.findAll();
        res.status(200).json({data: categorys, message:'ok'});
    }catch(e){
        res.status(500).json({message: e});
    }
}

const deleteCategoryByEmail = async (req, res) => {
    try{
        const categorys = await categoryService.deleteCategoryByEmail(req.email); 
        res.status(200).json({data: categorys, message:'ok'});
    }catch(e){
        res.status(500).json({message: e});
    }
}

const deleteCategoryById = async (req, res) => {
    try{
        const categorys = await categoryService.deleteCategoryById(req.c_id); 
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
