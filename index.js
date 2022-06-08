require("dotenv").config();
const { User } = require("./models");
const express = require("express");
const app = express();

const port = process.env.PORT || 5000;

app.use(User);

app.listen(port, (err) => {
  console.log(
    err ? `err starting server: ${err}` : `Server started on port ${port}...`
  );
});
