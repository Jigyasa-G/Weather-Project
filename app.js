const express = require("express");
const https = require("https");

const app = express();

app.get("/", function (req,res) {
  var url = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=2126ac0dd63fe98363ed0d9b5b04128d"
  https.get(url, function (response) {
    console.log(response);
  })
  res.send("Server is running");
});

app.listen(3000, function () {
  console.log("Server is running on port 3000 now.");
});
