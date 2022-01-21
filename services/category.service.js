const { models } = require("./../libs/sequelize");

class CategoryService {

  constructor(){}

  async create(data) {
    return await models.Category.create(data);
  }

  async find() {
    return await models.Category.findAll({
      include: ['products']
    });
  }

  async findOne(id) {
    return await models.Category.findByPk(id);
  }

  async update(id, changes) {
    const Customer = await models.Category.findByPk(id);
    const rta = (await Customer).update(changes);
    return rta;
  }

  async delete(id) {
    return await models.Category.destroy(id);
  }

}

module.exports = CategoryService;
