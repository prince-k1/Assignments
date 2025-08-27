const { DataTypes } = require('sequelize');
const sequelize = require('../utils/db-connection');

const Meeting = sequelize.define('Meeting', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    slotIndex: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'meetings'
});

module.exports = Meeting;
