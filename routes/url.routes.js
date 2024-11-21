const express = require("express");
const router = express.Router();
const {
  createShortUrl,
  redirectUrl,
  renderHomePage,
} = require("../controllers/url.controller");

router.get("/", renderHomePage);
router.post("/api/shorten", createShortUrl);

module.exports = router;
