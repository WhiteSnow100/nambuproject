const dictionaryDao = require('../dao/dictionaryDao.js');

const createDictionary = async (dictionaryData) => {
    return await dictionaryDao.createDictionary(dictionaryData);
}

const updateDictionary = async (dictionaryData) => {
    return await dictionaryDao.updateDictionary(dictionaryData);
}

const deleteDictionaryByWord = async (dictionaryData) => {
    return await dictionaryDao.deleteDictionaryByWord(dictionaryData);
}

const deleteDictionaryByEmail = async (email) => {
    return await dictionaryDao.deleteDictionaryByEmail(email);
}

const findDictionaryByWord = async (dictionaryData) => {
    return await dictionaryDao.findDictionaryByWord(dictionaryData);
}

const findDictionaryByEmail = async (email) => {
    return await dictionaryDao.findDictionaryByEmail(email);
}

module.exports = { 
    createDictionary,
    updateDictionary,
    deleteDinctionaryByEmail,
    deleteDinctionaryByword,
    findDictionaryByEmail,
    findDictionaryByWord,
}