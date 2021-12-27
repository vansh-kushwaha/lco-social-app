const express = require("express");
const app = express();
const dateFormate = require("date-format");

app.get("/", (req, res) => {
  res.send("hello from express");
});

app.get("/api/instagram", (req, res) => {
  const instasocial = {
    username: "Vansh_kush_waha",
    followers: 300,
    follows: 200,
    date: dateFormate.asString("hh:mm:ss dd/MM/yy", new Date()),
  };

  res.status(200).json(instasocial);
});

app.get("/api/facebook", (req, res) => {
  const instasocial = {
    username: "Vansh@facebook",
    followers: 300,
    follows: 200,
    date: dateFormate.asString("hh:mm:ss dd/MM/yy", new Date()),
  };

  res.status(200).json(instasocial);
});

app.get("/api/linkedin", (req, res) => {
  const linkedsocial = {
    username: "Vansh@linkedin",
    followers: 300,
    follows: 100,
    date: dateFormate.asString("hh:mm:ss dd/MM/yy", new Date()),
  };

  res.status(200).json(linkedsocial);
});

app.get("/api/:name", (req, res) => {
  const value = req.params.name;

  res.status(200).json(value);
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
});
