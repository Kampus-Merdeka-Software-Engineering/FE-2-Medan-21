const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.js');

const item = sequelize.define('item',{
    idBarang: {
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true
    },
    namaBarang: {
        type: DataTypes.STRING,
        allowNull: false
    },
    hargaBarang: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    imgBarang: {
        type: DataTypes.STRING,
        allowNull: false
    },
})

module.exports = item;