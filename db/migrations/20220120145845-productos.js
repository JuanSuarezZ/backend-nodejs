'use strict';

const { CategorySchema, CATEGORY_TABLE } = require('./../models/category.model');
const { ProductSchema, PRODUCT_TABLE }  = require('./../models/product.model');

module.exports = {
  async up ( queryInterface ) {
    await queryInterface.createTable( CATEGORY_TABLE, CategorySchema );
    await queryInterface.createTable( PRODUCT_TABLE, ProductSchema );

    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down ( queryInterface ) {
    await queryInterface.dropTable( CATEGORY_TABLE, CategorySchema );
    await queryInterface.dropTable( PRODUCT_TABLE, ProductSchema );

    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
