const Device = require("../models/deviceModel");
const crypto = require("crypto");

async function fetch() {
  const data = await Device.find({});
  if (data.length) {
    return data;
  } else {
    return { message: "data is empty" };
  }
}

async function getOne(id) {
  const data = await Device.findOne({ _id: id });
  return data;
}

async function create(body) {
  let number = body.device_number;
  number = number.replace(/^08/, "+62");

  const userId = body.userId;
  const timestamp = Date.now().toString();
  const randomString = crypto.randomBytes(8).toString("hex");
  const uniqueCode = `${timestamp}-${randomString}`;

  let device = new Device({ ...body, device_number: number, device_code: uniqueCode, user_id: userId });
  device = await device.save();
  return device;
}

async function update(body, id) {
  const data = await Device.findOneAndUpdate(
    { _id: id },
    { ...body },
    {
      replace: true,
    }
  );
  return data;
}

async function destroy(id) {
  const data = await Device.findOneAndDelete({ _id: id });
  return data;
}

module.exports = {
  fetch,
  getOne,
  create,
  update,
  destroy,
};
