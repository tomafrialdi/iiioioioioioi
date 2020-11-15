'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Skill extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Skill.init({
    title: DataTypes.STRING,
    icon: DataTypes.STRING,
    order: DataTypes.INTEGER,
    detail: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Skill',
  });
  return Skill;
};