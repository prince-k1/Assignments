const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../utils/db-connection');

const payment = sequelize.define('payment',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull : false
    },
    payment: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

module.exports = payment;