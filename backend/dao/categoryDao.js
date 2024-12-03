const models = require('../models'); // ../models/index.js db => models 
// Data Access Object for User 
// const findAll = async () => {
//     return await models.User.findAll();
//     // select * from users 
// }

const createCategory = async (categoryData) => {
    return await models.Category.create(categoryData);
} // insert category ... values ... 

const updateCategory = async (c_id, userData) => {
    return await models.Category.update(
        userData,
        {
        where : {c_id: c_id},
    }); // update category set .... where c_id = c_id
}

const deleteCategoryById = async (c_id) => {
    return await models.Category.destroy({
        where : {c_id: c_id}
    }); // delete from category where c_id = c_id
}
const deleteCategoryByEmail = async (email) => {
    return await models.Category.destroy({
        where : {email: email}
    }); // delete from category where email = email
}

const findCategoryById = async (c_id) => {
    return await models.Category.findOne({
        where : {c_id: c_id}
    }); // select * from category where c_id = c_id
}
const findCategoryByEmail = async (email) => {
    return await models.Category.findAll({
        where : {email: email}
    }); // select * from category where email = email
}

module.exports = { 
    createCategory,
    updateCategory,
    deleteCategoryById,
    deleteCategoryByEmail,
    findCategoryById,
    findCategoryByEmail,
}