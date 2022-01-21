'use strict';

const { OrderSchema, ORDER_TABLE } = require('./../models/order.model');


module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable( ORDER_TABLE, OrderSchema );
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down (queryInterface) {
    await queryInterface.dropTable( ORDER_TABLE, OrderSchema );
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
