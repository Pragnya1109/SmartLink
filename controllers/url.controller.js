const Url = require("../models/url.model");
const QRCode = require("qrcode");
const baseUrl = process.env.BASE_URL;

exports.renderHomePage = (req, res) => {
  console.log("Rendering home page");
  res.render("index");
};

exports.createShortUrl = async (req, res) => {
  // Checking purpose
  console.log("Recieved URL : ", req.body.fullUrl);
  // Check if the request body contains a URL
  //   if (!req.body.url) {
  //     return res.status(400).json({ error: "URL is required" });
  //   }

  const { fullUrl } = req.body;

  try {
    const { nanoid } = await import("nanoid");
    const shortUrl = `${baseUrl}/${nanoid(8)}`;
    const url = new Url({
      fullUrl,
      shortUrl,
      redirectUrl,
      createdAt: new Date(),
    });
    await url.save();
    const qrcode = await QRCode.toDataURL(shortUrl);
    console.log("Inside shortUrl creation function");

    res.render("result", { shortUrl, qrcode });
    console.log("Created shorturl");
  } catch (error) {
    console.error(error.messsage);
    res.status(500).send("SERVER ERROR");
  }
};

exports.redirectUrl = async (req, res) => {
  try {
    const url = await Url.findOne({ shortUrl: req.params.shortUrl });
    url.clicks += 1;
    await url.save();
    res.redirect(url.fullUrl);
  } catch (error) {
    console.error(error.messsage);
    res.status(500).render("error", { message: "SERVER ERROR" });
  }
};
