const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

router.get("/", (req, res) => {
  const token = jwt.sign({ name: "Madis" }, "tasa");
});

router.get("/kodutoo", (req, res) => {
  const token = jwt.sign(req.body, "tasa");

  res.send(token);
});

const postMiddleware = (req, res, next) => {
  next();
};

router.post("/", postMiddleware, (req, res) => {
  const { token } = req.body;

  jwt.verify(token, "tasa", function (err, decoded) {
    if (err) return res.send(false);
    console.log(decoded);
    res.send(true);
  });
});

router.post("/kodutoo", (req, res) => {
  const { token } = req.body;

  jwt.verify(token, "tasa", function (err, decoded) {
    if (err) return res.send(false);
    console.log(decoded);
    res.send(true);
  });
});

module.exports = router;