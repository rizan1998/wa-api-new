const { Client, LocalAuth } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");

const whatsappClient = new Client({
  webVersionCache: {
    type: "remote",
    remotePath: "https://raw.githubusercontent.com/wppconnect-team/wa-version/main/html/2.2412.54.html",
  },
  authStrategy: new LocalAuth(),
});

whatsappClient.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

whatsappClient.on("ready", () => console.log("Client is ready!"));

whatsappClient.on("message", async (message) => {
  try {
    if (message.from != "status@broadcast") {
      const contact = await message.getContact();
      console.log(contact, message.body);
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = whatsappClient;
