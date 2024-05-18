const express = require("express");
const router = new express.Router();

// controller
const deviceCtrl = require("../controllers/deviceController");

router.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

router.post("/message", async (req, res) => {
  try {
    const message = req.body.message;
    const phoneNumber = req.body.phoneNumber;
    await whatsappClient.sendMessage(phoneNumber, message);
    res.json({ message: "Message sent successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to send message" });
  }
});

router.get("/devices/fetch", deviceCtrl.fetch);
router.post("/devices/create", deviceCtrl.create);
router.get("/devices/:id/detail", deviceCtrl.getOne);
router.put("/devices/:id/update", deviceCtrl.update);
router.delete("/devices/:id/delete", deviceCtrl.destroy);

module.exports = router;
