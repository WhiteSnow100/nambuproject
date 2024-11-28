const categoryDao = require('../dao/categoryDao');

const createCategory = async (categoryData) => {
    return await categoryDao.createCategory(categoryData);
}

const updateCategory = async (categoryData) => {
    return await categoryDao.updateCategory(categoryData);
}

const deleteCategoryById = async (c_id) => {
    return await categoryDao.deleteCategoryById(c_id);
}
const deleteCategoryByEmail = async (email) => {
    return await categoryDao.deleteCategoryByEmail(email);
}

const findCategoryById = async (c_id) => {
    return await categoryDao.findCategoryById(c_id);
}

const findCategoryByEmail = async (email) => {
    return await categoryDao.findCategoryByEmail(email);
}

module.exports = { 
    createCategory,
    updateCategory,
    deleteCategoryById,
    deleteCategoryByEmail,
    findCategoryById,
    findCategoryByEmail,
}