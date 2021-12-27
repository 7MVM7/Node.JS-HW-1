const app = require("../app");
const db = require("../model/db");

const mongoose = require("mongoose");

const { DB_HOST, PORT = 3000 } = process.env;

mongoose.connect(DB_HOST);
db.then(() => {
  app.listen(PORT, () => {
    console.log(`server is running. Use our API on port ${PORT}`);
  });
}).catch((error) => {
  console.log(error.message);
  process.exit(1);
});
