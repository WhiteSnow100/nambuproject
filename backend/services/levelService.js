const levelDao = require('../dao/levelDao');

const findLevelByEmail = async(emial) => {
    return await levelDao.findLevelByEmail(emial);
}

const updateLevel = async(id, level) => {
    return await levelDao.updateLevel(id, level);
}

module.exports = {
    findLevelByEmail,
    updateLevel,
}