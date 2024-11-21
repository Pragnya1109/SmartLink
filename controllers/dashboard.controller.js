const Url = require("../models/url.model");

exports.getDashboard = async (req, res) => {
  try {
    const urls = await Url.find({});
    res.render("dashboard", { urls });
  } catch (error) {
    console.error(error.message);
    res.render("error", { message: "SERVER ERROR" });
  }
};
