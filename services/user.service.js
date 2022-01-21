const boom = require('@hapi/boom');

// const getConnection = require('../libs/postgres copy');
// const Sequelize = require("./../libs/sequelize");
const { models } = require("./../libs/sequelize");

// const pool = require('../libs/postgres pool');

class UserService {

  constructor() {
  }

  async create(data) {
    return models.User.create(data);
  }

  async find() {
    // const con = getConnection();
    // const query = 'SELECT * FROM task';
    // return (await con).query(query);
    // return [];
    // return await this.pool.query(query);
    // const [ data, metadata ] = await Sequelize.query(query);
    // return {
    //   data,metadata
    // }
    return models.User.findAll({
      include: ['customer']
    });
  }

  async findOne(id) {
    const user = await models.User.findByPk(id);
    if(user){

      return user;
    }
    throw boom.notFound('elemento no encontrado');
  }

  async update(id, changes) {
    const user = await models.User.findByPk(id);
    const rta = (await user).update(changes);
    return rta;
  }

  async delete(id) {
    const user = await models.User.findByPk(id);
    if(user){
      await user.destroy();
      return {"mensaje":"elemento borrado"}
    }
    throw boom.notFound('elemento no encontrado');
  }
}

module.exports = UserService;
