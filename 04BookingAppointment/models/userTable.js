const { DataTypes } = require('sequelize');
const sequelize = require('../utils/db-connection');

const userTable = sequelize.define('user', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'user'
});

module.exports = userTable;
