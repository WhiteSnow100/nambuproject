module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
        email: {
            type: DataTypes.STRING(255), // 255
            allowNull: false, 
        },
        c_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey : true,
            autoIncrement: true, // 자동 증가
        }, 
        c_name: {
            type: DataTypes.STRING(255), // 카테고리 이름
            allowNull: false,
        }, 
        c_date: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        }, 
        d_date: {
            type: DataTypes.DATE,
            allowNull: true,
        }, 
    }, {
        tableName: "categorys",
        timestamps: false,
        id: false, // 기본적으로 생성되는 `id` 필드를 방지
    });
    return Category;
}
 