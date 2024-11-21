module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        email: {
            type: DataTypes.STRING(255), // 255
            allowNull: false,
            unique: true,
            primaryKey : true,
        },
        pw: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
       name: {
            type: DataTypes.STRING(255),
            allowNull: true,
        }, 
        gen: {
            type: DataTypes.CHAR(1),
            allowNull: true,
            defaultValue: '1', // 1:여자, 2:남자
        },
        b_date: {
            type: DataTypes.DATE, // DATE 타입
            allowNull: true, // Null 허용  
        },     
        c_date: {
            type: DataTypes.DATE, // DATE 타입
            allowNull: false,
            defaultValue: DataTypes.NOW, // 현재 날짜 기본값
        },
    }, {
        tableName: "users",  // 테이블명 설정
        timestamps: false, // 자동으로 `createdAt`, `updatedAt`을 생성하지 않음
        id: false, // 기본적으로 생성되는 `id` 필드를 방지
    });
    return User;
}
