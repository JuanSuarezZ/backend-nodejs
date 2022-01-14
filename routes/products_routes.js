const express = require("express");
const faker = require("faker");
const router = express.Router();



router.get("/", (req,res) => {
  // res.json({ listaDeProductos : ["papa"," yuca", "carne", "leche "," uwu"] });
  const {limit} = req.query;

  const size = limit || 10;
  const products = [];
  for (let index = 0; index < size; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(),10),
      image: faker.image.imageUrl()
    });
  }
  res.json(
    products
  );
});

router.post("/", (req,res) => {

  const body = req.body;
  res.json({
    message: 'creado',
    body: body
  });
});

// router.get("/filter",(req,res)=>{
//   res.send("fuktri");
// });

router.get("/:id", (req,res) => {
  const {id} = req.params;
  res.json(
    {
      id: id,
      name: "product:"+id,
      price: 2000
    });
});

module.exports = router;


