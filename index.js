const express = require("express");
const RouterApi = require('./routes');
const app = express();
const port = 3900;


app.use(express.json());

app.listen(port,()=>{
  // console.log("estamos en el puerto: " +  port);
});

app.get("/", (req,res) => {
  res.send("que onda perros");
});

RouterApi(app);










