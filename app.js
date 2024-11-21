const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const authRoutes = require("./routes/auth.routes");
const urlRoutes = require("./routes/url.routes");
const dashboardRoutes = require("./routes/dashboard.routes");

const app = express();

app.use(express.json()),
  app.use(express.urlencoded({ extended: false })),
  app.use("/public", express.static(path.join(__dirname, "public"))),
  //view engines
  app.set("view engine", "ejs");

//Routes
app.use("/api", authRoutes);
app.use("/api", urlRoutes);
app.use("/api", dashboardRoutes);

module.exports = app;
