const express = require('express');

const OrderService = require('./../services/order.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { getOrderSchema, createOrderSchema, addItemSchema } = require('./../schemas/order.schema');

const router = express.Router();
const service = new OrderService  ();

router.get('/', async (req, res, next) => {
  try {
    const products = await service.find();
    res.json(products);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  validatorHandler(getOrderSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const product = await service.findOne(id);
      res.json(product);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  validatorHandler(createOrderSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newProduct = await service.create(body);
      res.status(201).json(newProduct);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/-additem',
  validatorHandler(addItemSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newProduct = await service.addItem(body);
      res.status(201).json(newProduct);
    } catch (error) {
      next(error);
    }
  }
);


module.exports = router;
