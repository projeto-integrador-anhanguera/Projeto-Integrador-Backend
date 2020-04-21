const bodyParser = require("body-parser");
const express = require("express");
const db = require("./app/models");
const routes = require("./routes");
const cors = require("cors");
const app = express();
const carRoute = require("./app/routes/car.route");

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: false }));
app.use(routes);
app.use("/api", carRoute);

db.sequelize.sync().then(() => {
  app.listen(3333);
});
