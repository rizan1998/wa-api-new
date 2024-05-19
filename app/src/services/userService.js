const User = require("../models/userModel");

async function fetch() {
  const data = await User.find({});
  if (data.length) {
    return data;
  } else {
    return { message: "data is empty" };
  }
}
async function getOne(id) {
  const data = await User.findOne({ _id: id });
  return data;
}
async function create(body) {
  let User = new User({ ...body });
  User = await User.save();
  return User;
}
async function update(body, id) {
  const data = await User.findOneAndUpdate(
    { _id: id },
    { ...body },
    {
      replace: true,
    }
  );
  return data;
}
async function destroy(id) {
  const data = await User.findOneAndDelete({ _id: id });
  return data;
}

async function findUserBy(field, userIdentityValue) {
  const user = await User.findOne({ [field]: userIdentityValue });
  return user;
}

module.exports = {
  fetch,
  getOne,
  create,
  update,
  destroy,
  findUserBy,
};
