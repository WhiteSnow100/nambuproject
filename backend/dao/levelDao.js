const models = require('../models');

const findLevelByEmail = async (email) => {
    const query = `
        SELECT * 
        FROM Dictionary 
        WHERE email = :email
    `;

    return await models.sequelize.query(query, {
        type: models.Sequelize.QueryTypes.SELECT,
        replacements: { email }, // email 변수를 바인딩
    });
};

const updateLevel = async (id, level) => {
    console.log(id);
    return await models.Dictionary.update(
        { level }, // 업데이트할 컬럼과 값
        {
            where: { id }, // 조건: id가 일치하는 행
        }
    );
};
 

module.exports = {
    updateLevel,
    findLevelByEmail, 
} 