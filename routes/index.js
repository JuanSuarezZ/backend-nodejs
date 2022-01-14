const express = require("express")
const productsRouter = require('./products_routes');
const categoriesRouter = require('./categories_routes');
const userRouter = require('./users_routes');

function RouterApi(app) {

  const router = express.Router();
  app.use("/api/v1",router);

  router.use('/products',productsRouter);
  router.use('/categories',categoriesRouter);
  router.use('/user',userRouter);
}

module.exports = RouterApi;
