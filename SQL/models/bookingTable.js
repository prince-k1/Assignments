const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../utils/db-connection');

const booking = sequelize.define('booking',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull : false
    },
    booking: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

module.exports = booking;