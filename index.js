const bodyParser = require("body-parser");
const express = require("express");
const db = require("./app/config/db-config");
const routes = require("./routes/routes");
const cors = require("cors");
const app = express();
const script = require('./app/services/ScriptToRegisterCars');

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: false }));
app.use(routes);

db.sequelize.sync().then(() => {
  app.listen(3333);
});

script;
