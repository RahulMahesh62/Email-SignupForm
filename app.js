const parser = require("body-parser");
const express = require("express");
const request = require("request");

const app = express();

// app.get("/", function (req, res) => {
//     console.log("Server Open");
// });

app.listen(3000, function() {
    console.log("Server Ready");
});