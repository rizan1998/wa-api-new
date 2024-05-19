const userSvc = require("../services/userService");

async function fetch(req, res) {
  const data = await userSvc.fetch();
  res.send(data);
}
async function getOne(req, res) {
  const data = await userSvc.getOne(req.params.id);
  res.send(data);
}
async function create(req, res) {
  const room = await userSvc.create(req.body);
  res.send(room);
}
async function update(req, res) {
  const data = await userSvc.update(req.body, req.params.id);
  res.send(data);
}
async function destroy(req, res) {
  const data = await userSvc.destroy(req.params.id);
  res.send(data);
}

module.exports = {
  fetch,
  getOne,
  create,
  update,
  destroy,
};
