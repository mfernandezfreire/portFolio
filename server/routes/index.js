const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.post("/send-email", (req, res, next) => {
  let { email, subject, message } = req.body;
  console.log(email, subject, message);
  let transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "manufernandezfreire@gmail.com",
      pass: "NuncaMais2601",
    },
  });
  transporter
    .sendMail({
      from: '"My Personal Page " <myawesome@project.com>',
      to: email,
      subject: subject,
      text: message,
      html: `<b>${message}</b>`,
    })
    .then((info) => res.json(info))
    .catch((error) => console.log(error));
});

module.exports = router;
