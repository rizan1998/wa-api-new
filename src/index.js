const expres = require("express");
const cors = require("cors");
const messageRouter = require("./routes/messageRouter");
const whatsappClient = require("./services/WhatsappClient");

whatsappClient.initialize();

const app = expres();

app.use(expres.json());
app.use(cors());
app.use(messageRouter);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
