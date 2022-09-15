const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'mrclean11',
    password: 'pass123@'
  },
  {
    username: 'yetiman500',
    password: 'p4ss@'
  },
  {
    username: 'johnwick78',
    password: 'P@55WoRD'
  },
  {
    username: 'Lax1818',
    password: 'p@55word'
  },
  {
    username: 'wenwen22',
    password: 'pass129!'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
