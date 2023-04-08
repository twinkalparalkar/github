const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const User = sequelize.define('Products', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: Sequelize.STRING,
  price: Sequelize.INTEGER
});
sequelize.sync();
module.exports = User;