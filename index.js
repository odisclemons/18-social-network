require("dotenv").config();
//const mongoose = require("mongoose");
const express = require("express");
const db = require("./config/connection");
const routes = require("./routes");
const app = express();

const port = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

db.once("open", () => {
  console.log(db.port);
  console.log(`Mongoose connected to ${db.name} on port ${db.port}...`);
  app.listen(port, (err) => {
    console.log(
      err
        ? `Express err: \n ${err}`
        : `Express server started on port ${port}...`
    );
  });
});
