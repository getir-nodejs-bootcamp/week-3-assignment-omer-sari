const express = require("express");
const app = express();
const { UserRoutes } = require("./routes");

require("dotenv").config()
const checkToken = require('./middlewares/checkToken');
const log = require('./middlewares/log');

app.use(express.json());

app.listen("6161", () => {
    console.log("I am working baby");
    app.use("/users", checkToken, log, UserRoutes);
})
