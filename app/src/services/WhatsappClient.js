const { Client, LocalAuth, MessageMedia } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");

const clients = {};
const clientIds = ["1"];

function startClient(id) {
  clients[id] = new Client({
    authStrategy: new LocalAuth({
      clientId: id,
    }),
    webVersionCache: {
      type: "remote",
      remotePath: `https://raw.githubusercontent.com/wppconnect-team/wa-version/main/html/2.2407.3.html`,
    },
  });

  clients[id].initialize().catch((err) => console.log(err));

  clients[id].on("qr", (qr) => {
    console.log(clients[id]);
    console.log(qr);
    console.log(" ");
    // qrcode.generate(qr, { small: true });
  });

  clients[id].on("ready", () => {
    console.log(`Client ${id} is ready!`);

    clients[id].on("message", async (msg) => {
      try {
        // Log untuk memeriksa nilai variabel lingkungan
        if (msg.from != "status@broadcast") {
          const contact = await msg.getContact();
          console.log(contact);

          // Periksa apakah kontak memiliki nama yang tersimpan
          const contactName = contact.pushname || contact.number;
          console.log(`Contact Name: ${contactName}, Message: ${msg.body}`);

          //   console.log(contact, msg.body);

          const chat = await msg.getChat();
          //   chat.sendMessage("Terima kasih atas pesan Anda!");
        }
      } catch (error) {
        console.error(error);
      }
    });
  });
}

function initializeClients() {
  clientIds.forEach((id) => startClient(id));
}

function sendMessage(phoneNumber, message, clientId, file) {
  if (file) {
    const messageFile = new MessageMedia(file.mimetype, file.buffer.toString("base64"));
    clients[Number(clientId)].sendMessage(phoneNumber, messageFile);
  } else {
    clients[clientId].sendMessage(phoneNumber, message);
  }
}

module.exports = { startClient, sendMessage, initializeClients };
