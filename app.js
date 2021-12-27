const mongoose = require("mongoose");

const DB_HOST =
  "mongodb+srv://Vladyslav:obwYZkCfM8WZd7zc@cluster0.bsw1x.mongodb.net/db-contacts?retryWrites=true&w=majority";

mongoose
  .connect(DB_HOST)

  .then(() => {
    console.log("database connect success");
  })
  .catch(error.message);
process.exit(1);
