const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    // define columns
    // ID COLUMN
    id:{
      type: DataTypes.INTERGER,
      allownull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // NAME COLUMN
    category_name: {
      type: DataTypes.STRING,
      allownull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
