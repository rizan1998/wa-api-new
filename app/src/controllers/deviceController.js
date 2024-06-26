const deviceSvc = require("../services/deviceService");

async function fetch(req, res) {
  const data = await deviceSvc.fetch();
  res.send(data);
}
async function getOne(req, res) {
  const data = await deviceSvc.getOne(req.params.id);
  res.send(data);
}
async function create(req, res) {
  const room = await deviceSvc.create(req.body);
  res.send(room);
}
async function update(req, res) {
  const data = await deviceSvc.update(req.body, req.params.id);
  res.send(data);
}
async function destroy(req, res) {
  const data = await deviceSvc.destroy(req.params.id);
  res.send(data);
}

module.exports = {
  fetch,
  getOne,
  create,
  update,
  destroy,
};
