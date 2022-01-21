const { config } = require('./../config/config');

// const USER = encodeURICompo/nent(config.dbUser);
// const PASSWORD = encodeURIComponent(config.dbPassword);
// const URL = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

module.exports = {
  development: {
    url: config.dbUrl,
    dialect: "postgres",
  },
  production: {
    url: config.dbUrl,
    dialect: "postgres",
    ssl: {
      rejectUnautorized: false
    }
  },

}
