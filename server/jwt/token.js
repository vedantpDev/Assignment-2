const express = require("express");
const conn = require("../db");
const route = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

route.post("/", (req, res) => {
  let q = `select name , gender , email, password from userData where email = '${req.body.email}'`;
  conn.query(q, (err, data) => {
    let name = data[0].name;
    let gender = data[0].gender;
    let user = data.find((u) => u.email == req.body.email);
    if (!user) throw new Error("Invalid User ");

    let checkPassword = bcrypt.compareSync(req.body.password, user.password);
    if (!checkPassword) throw new Error("Invalid Password");

    const tkn = jwt.sign({ id: user.id }, "jwtPrivateKey", {
      expiresIn: "15m",
    });

    res.status(200).send({
      email: req.body.email,
      uName: name,
      uGender: gender,
      password: req.body.password,
      token: tkn,
      message: "Token Generated",
    });
  });
});

module.exports = route;
