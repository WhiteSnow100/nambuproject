const models = require('../models');

const findAll = async () => {
    return await models.User.findAll();
}

const createUser = async (userData) =>{
    // console.log(' test >>>>>>>>>>>>>.', userData    );
    return await models.User.create(userData);
}

const findUserByEmail = async (email) => {
    return await models.User.findOne({
        where : {email: email}
    });
}

const updateUser = async (email, userData) => {    
    return await models.User.update(userData, {
        where : {email} 
    });    
}

const deleteUser = async (email) => {
    return await models.User.destroy({
        where : {email}
    });
}

module.exports = {
    findAll,
    createUser,
    findUserByEmail,
    updateUser,
    deleteUser,
} 