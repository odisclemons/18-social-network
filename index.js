require("dotenv").config();
const { User, Thought } = require("./models");
const express = require("express");
const app = express();

const port = process.env.PORT || 5000;

app.use(User);
app.use(Thought);

app.listen(port, (err) => {
  console.log(
    err ? `err starting server: ${err}` : `Server started on port ${port}...`
  );
});
