const express = require("express");
const router = new express.Router();
const whatsappClient = require("../services/WhatsappClient");

router.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

router.post("/message", async (req, res) => {
  try {
    const message = req.body.message;
    const phoneNumber = req.body.phoneNumber;
    // console.log([message, phoneNumber]);
    await whatsappClient.sendMessage(phoneNumber, message);
    res.json({ message: "Message sent successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to send message" });
  }
});

module.exports = router;
