const { DataTypes } = require('sequelize');
const sequelize = require('../utils/db-connection');

const userTable = sequelize.define('cricketer', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dob: {
        type: DataTypes.STRING,
        allowNull: false
    },
    url: {
        type: DataTypes.STRING,
        allowNull: false
    },
    birthPlace: {
        type: DataTypes.STRING,
        allowNull: false
    },
    career: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    matches: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    score: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    fifties: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    century: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    wickets: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    average: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'cricketer'
});

module.exports = userTable;
