const Device = require("../models/deviceModel");

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
  let device = new Device({ ...body });
  device = await Device.save();
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
