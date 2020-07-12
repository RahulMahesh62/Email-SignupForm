const parser = require("body-parser");
const express = require("express");

const app = express();

app.get("/", (req, res => {
    console.log("Server Open");
}));

app.listen(3000);