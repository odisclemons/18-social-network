require("dotenv").config();

const express = require("express");
const app = express();

const port = process.env.PORT || 5000;

app.listen(port, (err) => {
  console.log(
    err ? `err starting server: ${err}` : `Server started on port ${port}...`
  );
});
