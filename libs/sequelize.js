const { Sequelize } = require("sequelize");

const { config } = require('./../config/config');
const setupModels = require('./../db/models/index');

const options = {
  dialect: "postgres",
  logging: config.isProd ? false : true,
};

if(config.isProd){
  options.ssl = {rejectUnauthorized: false}
}else{
  options.URL = config.dbUrl;
}

const sequelize = new Sequelize(config.dbUrl, options);

setupModels(sequelize);


module.exports = sequelize;
