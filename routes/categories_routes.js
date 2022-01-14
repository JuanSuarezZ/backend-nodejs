const express = require("express");
const router = express.Router();

router.get("/",(req,res)=>{
  res.json("categories");
});

router.get("/:categoryId/products/:idProducct", (req,res) => {
  const {categoryId,idProducct} = req.params;
  res.json(
    {
      id: categoryId,
      idp: idProducct,
      name: "producto:"+categoryId,
      price: 2000
    });
});

module.exports = router;
