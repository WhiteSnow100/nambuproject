module.exports = (sequelize, DataTypes) => {
    const Login = sequelize.define('Login', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        email: {
            type: DataTypes.STRING, // 255
            allowNull: false, 
        },  
        login_date: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        logout_date: {
            type: DataTypes.DATE,
            allowNull: true, 
        },    
    }, {
        tableName: "logins",
        timestamps: false,
        id: false,
    });
    return Login;
}