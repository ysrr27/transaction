var Sequelize = require('sequelize');
var t001_transactions = require('./t001_transaction');
const sequelize = new Sequelize('', '', '', {
    host: 'localhost',
    dialect: 'mssql',

});

const t001_transaction = t001_transactions(sequelize, Sequelize);

sequelize.sync({ force: false })
    .then(() => {
        console.log('Connection has been established successfully.');
});

module.exports = { t001_transaction };
