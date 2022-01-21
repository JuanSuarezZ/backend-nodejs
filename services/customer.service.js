const boom = require('@hapi/boom');
const { models } = require("./../libs/sequelize");


class CustomerService {

  constructor() {
  }

  async create(data) {

    const newCustomer = await models.Customer.create(data);
    return newCustomer;
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
    return models.Customer.findAll({
      include:['user']
    });
  }

  async findOne(id) {
    const Customer = await models.Customer.findByPk(id);
    if(Customer){

      return Customer;
    }
    throw boom.notFound('elemento no encontrado');
  }

  async update(id, changes) {
    const Customer = await models.Customer.findByPk(id);
    const rta = (await Customer).update(changes);
    return rta;
  }

  async delete(id) {
    const Customer = await models.Customer.findByPk(id);
    if(Customer){
      await Customer.destroy();
      return {"mensaje":"elemento borrado"}
    }
    throw boom.notFound('elemento no encontrado');
  }
}

module.exports = CustomerService;
