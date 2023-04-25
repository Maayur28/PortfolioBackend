const express = require("express");
const service = require("../services/user");
const routes = express.Router();
require("dotenv").config();

routes.get("/", async (req, res, next) => {
  try {
    res.json("Ping Successful").status(200);
  } catch (error) {
    next(error);
  }
});

routes.post("/contact", async (req, res, next) => {
  try {
    if (!req.body.captcha) return res.json({ success: false }).status(400);
    if (await service.verifyCaptcha(req)) {
      await service.sendContactMail(req.body);
      return res.json({ success: true }).status(200);
    } else {
      return res.json({ success: false }).status(200);
    }
  } catch (error) {
    next(error);
  }
});

module.exports = routes;
