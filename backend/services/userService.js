const userDao = require('../dao/userDao');

const findAll = async() => {
    return await userDao.findAll();
}

const createUser = async(userData) => {
    const {name, pw, email} = userData;

    // pw = hashpw;

    return await userDao.createUser(userData);
}

const findUserByEmail = async(email) => {
    return await userDao.findUserByEmail(email);
}

const updateUser = async(email, userData) => {
    return await userDao.updateUser(email, userData);
}

const deleteUser = async(email) => {
    return await userDao.deleteUser(email);
}

module.exports = {
    findAll,
    createUser,
    findUserByEmail,
    updateUser,
    deleteUser,
}