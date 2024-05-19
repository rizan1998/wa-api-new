const express = require("express");
const router = new express.Router();
const { registrationValidator, loginValidator } = require("../middleware/validator/authValidator");

// controller
const deviceCtrl = require("../controllers/deviceController");
const authCtrl = require("../controllers/authController");
const userCtrl = require("../controllers/userController");

// auth
router.post("/auth/register", registrationValidator, authCtrl.register);
router.post("/auth/login", loginValidator, authCtrl.login);

// user
router.post("/users/create", userCtrl.create);
router.get("/users/fetch", userCtrl.fetch);
router.get("/users/:id/detail", userCtrl.getOne);
router.put("/users/:id/update", userCtrl.update);
router.delete("/users/:id/delete", userCtrl.destroy);

// device routes
router.get("/devices/fetch", deviceCtrl.fetch);
router.post("/devices/create", deviceCtrl.create);
router.get("/devices/:id/detail", deviceCtrl.getOne);
router.put("/devices/:id/update", deviceCtrl.update);
router.delete("/devices/:id/delete", deviceCtrl.destroy);

// whatsapp routes
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

module.exports = router;
