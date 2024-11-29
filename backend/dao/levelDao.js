const models = require('../models');

const findLevelByCategory = async (c_id, limit) => {
    // console.log(`levelDao.js 4line id:${c_id}, limit:${limit}`);
    const query = `  
        SELECT id, email, word, des, des_json, level
        FROM dictionarys
        WHERE c_id = :c_id
        and level <> 0 
        LIMIT :limit;
    `;
    // console.log(`levelDao.js 12line query:${query}`);
    return await models.sequelize.query(query, {
        type: models.Sequelize.QueryTypes.SELECT,
        replacements: { c_id, limit },
    });
};

const updateLevelById = async (id, level) => {
    try {
        // console.log(`levelDao.js 21line id:${id}, level:${level}`);
    
        const result = await models.Dictionary.update(
        { level }, // Update level column
        { where: { id: Number(id) } } // Match id
        );
        return result; // Returns the number of updated rows
    } catch (e) {
       //  throw error; // Handle errors in service/controller layer
        console.error('Error during update levelDao.js:', e.message);
        res.status(500).json({message: e.message});
    }
};

module.exports = {
    updateLevelById,
    findLevelByCategory, 
} 