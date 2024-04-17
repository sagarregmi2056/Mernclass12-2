const express = require("express");
// import { express } from 'express';

const webapp = express();

webapp.get("/", (req, res) => {
  res.send("I am from server on browser");
});

webapp.listen(8000, () => {
  console.log("server is listening at port 80000");
});
