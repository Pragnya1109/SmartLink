const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const urlRoutes = require("./routes/url.routes");
const dashboardRoutes = require("./routes/dashboard.routes");
const authRoutes = require("./routes/auth.routes");

require("dotenv").config();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set the view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Static files
app.use(express.static(path.join(__dirname, "public")));

const connectDB = require("./config/db");

//Routes
app.use("/", urlRoutes); // Home page and URL handling
app.use("/dashboard", dashboardRoutes); // Dashboard
app.use("/auth", authRoutes); // Authentication

// Fallback route for 404 errors
app.use((req, res) => {
  res.status(404).render("error", { message: "Page not found" });
});

connectDB()
  .then(
    app.listen(process.env.PORT || 8080, () => {
      console.log(`Server is running on ${process.env.PORT}`);
    })
  )
  .catch((err) => {
    console.log("CONNECTION FAILED !!", err);
  });
