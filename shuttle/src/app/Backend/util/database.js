const Sequelize = require('sequelize');

const sequelize = new Sequelize('shuttle', 'root', 'GSKHAIRA@1005g', {
    dialect: 'mysql', 
    host: 'localhost',
    logging: console.log
});

module.exports = sequelize;
