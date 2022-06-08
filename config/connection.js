const { connect, connection } = require("mongoose");

connect("mongodb://127.0.0.1:27018/socialnetwork", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).catch((err) => console.log("Database connection error:", "\n", err));

module.exports = connection;
