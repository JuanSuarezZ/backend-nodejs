// const boom = require('@hapi/boom');
// const pool = require('../libs/postgres pool');

const { models } = require("./../libs/sequelize");
const { Op } = require('sequelize');

class ProductsService {

  constructor(){
    // this.products = [];
    // this.generate();
    // this.pool = pool;
    // this.pool.on('error',(err)=> console.error(err));
  }

  // generate() {
  //   const limit = 100;
  //   for (let index = 0; index < limit; index++) {
  //     this.products.push({
  //       id: faker.datatype.uuid(),
  //       name: faker.commerce.productName(),
  //       price: parseInt(faker.commerce.price(), 10),
  //       image: faker.image.imageUrl(),
  //       isBlock: faker.datatype.boolean(),
  //     });
  //   }
  // }

  async create(data) {
    return await models.Product.create(data);
  }

  async find(query) {
    const options = {
      include: ['category'],
      where: {}
    }
    const { limit, offset } = query;
    if (limit && offset) {
      options.limit =  limit;
      options.offset =  offset;
    }

    const { price } = query;
    if (price) {
      options.where.price = price;
    }

    const { price_min, price_max } = query;
    if (price_min && price_max) {
      options.where.price = {
        [Op.gte]: price_min,
        [Op.lte]: price_max,
      };
    }
    const products = await models.Product.findAll(options);
    return products;
  }

  async findOne(id) {
    return await models.Product.findByPk(id);
  }

  async update(id, changes) {
    const product = await models.Product.findByPk(id);
    const rta = (await product).update(changes);
    return rta;
  }

  async delete(id) {
    return await models.Product.destroy({
      where: { id: id }
    });
  }

}

module.exports = ProductsService;
