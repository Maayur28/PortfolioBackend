const sendMailObj = require("../utilities/mail");
const { default: axios } = require("axios");
require("dotenv").config();

let userService = {};

userService.sendContactMail = async (obj) => {
  await sendMailObj.sendContactMail(obj);
};

userService.verifyCaptcha = async (req) => {
  const secretKey = process.env.CAPTCHA_SECRET_KEY;
  const verifyURL = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${req.body.captcha}`;
  const response = await axios.post(verifyURL);
  return response.data.success;
};

module.exports = userService;
