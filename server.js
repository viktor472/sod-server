/// NPM package Declatation
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();

/// .env processes
const port = process.env.PORT || 5000;
/// Middleware declaclaration
/// Middleware start-ups
const ambRoute = require("./routes/ambRoute");
app.use("/amb", ambRoute);

/// Routing for books with verifcation and users without verification.
///Conekt server to mongo DB
mongoose.set("strictQuery", false);
mongoose.connect(process.env.DB_URL, () =>
  console.log("Connected to Data Base")
);

app.listen(port, (err) => {
  console.log(`Listening on port: ${port}`)
})