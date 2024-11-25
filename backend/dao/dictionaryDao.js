const models = require('../models'); // ../models/index.js db => models 


const updateDictionaryLevel = async (dictionaryData) => {
    return await models.Dictionary.update({
        where : {email: email, word: word}
    }); // update dictionary set level = level where email = email and word = word
}

module.exports = { 
    updateDictionaryLevel, 
}