const express = require("express");
const path = require("path");
const volleyball = require("volleyball");

const app = express();

const debug = process.env.NODE_ENV === "test";
app.use(volleyball.custom({ debug }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((err, req, res, next) => {
  res.status(err.status || 500).send({ message: err.message });
});

module.exports = app;
