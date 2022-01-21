'use strict';

const { OrderProductSchema, ORDER_PRODUCT_TABLE } = require('./../models/order-product.model');


module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable( ORDER_PRODUCT_TABLE, OrderProductSchema );
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down (queryInterface) {
    await queryInterface.dropTable( ORDER_PRODUCT_TABLE, OrderProductSchema );
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
