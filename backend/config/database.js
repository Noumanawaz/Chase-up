const { Sequelize } = require('sequelize');

// MySQL Database Configuration
module.exports = new Sequelize('userdb', 'root', '1234', {
  host: 'mychaseupdb.cz40c0q0gjkw.ap-south-1.rds.amazonaws.com',
  dialect: 'mysql', // Changed to MySQL
  port: 3306, // MySQL default port
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  logging: false // Disable logging for cleaner output
});
