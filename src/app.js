const express = require("express");
const app = express();
const { UserRoutes } = require("./routes");


app.use(express.json());

app.listen("6161", () => {
    console.log("I am working baby");
    app.use("/users", UserRoutes);
})


