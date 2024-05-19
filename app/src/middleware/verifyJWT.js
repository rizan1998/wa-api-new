const jwt = require("jsonwebtoken");
require("dotenv").config("../.env");

// const verifyJWT = (req, res, next) => {
//   const authHeader = req.headers["authorization"];
//   if (!authHeader) return res.sendStatus(401);
//   const token = authHeader.split(" ")[1];
//   jwt.verify(token, process.env.ACCESS_TOKEN_SECRET),
//     (err, decoded) => {
//       if (err) return res.sendStatus(403);
//       req.userId = decoded.userId;
//       req.username = decoded.username;
//     };
//   next();
// };

const verifyJWT = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader) return res.sendStatus(401);
  const token = authHeader.split(" ")[1];

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) return res.sendStatus(403);
    req.body.userId = decoded.userId;
    req.body.username = decoded.username;
    next();
  });
};

module.exports = verifyJWT;
