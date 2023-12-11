const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.js');

const order = sequelize.define('order',{
    idOrder: {
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true
    },
    idAkun: {
        type: DataTypes.STRING,
        allowNull: false
    },
    idBarang: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    namaBarang: {
        type: DataTypes.STRING,
        allowNull: false
    },
})

module.exports = order;