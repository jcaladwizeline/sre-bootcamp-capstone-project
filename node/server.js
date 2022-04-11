const express = require("express");
const bodyParser = require("body-parser");
const db = require("./models");
const errors = require("./middlewares/errors");
const routes = require("./routes/routes");

const app = express();
db.sequelize.sync();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
routes.init(app);

app.use(errors.handle);

module.exports = app;
