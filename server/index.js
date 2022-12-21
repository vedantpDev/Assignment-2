const express = require("express");
const app = express();
const PORT = 8000;
const cors = require("cors");
const conn = require("./db");
const bcrypt = require("bcrypt");
const token = require("./jwt/token");

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/token", token);

app.post("/registerData", (req, res) => {
  if (!req.body) return new Error("Please Provide Data");
  let hashPass = bcrypt.hashSync(`${req.body.password}`, 10);
  let q = `insert into userData (name, email, password, gender) value('${req.body.name}','${req.body.email}','${hashPass}','${req.body.gender}')`;
  conn.query(q, (err, data) => {
    if (err) return new Error(err);
    res.status(200).send({
      message: "Data Inserted",
    });
  });
});

// Product api

app.get("/getproductlist/:page", (req, res) => {
  let cureentPage = req.params.page;
  let postPerPage = 3;
  let lastIndexPost = cureentPage * postPerPage;
  let firstIndexPost = lastIndexPost - postPerPage;
  let q = `select * from productList`;
  conn.query(q, (err, data) => {
    if (err) return new Error(err);
    res.status(200).send({
      totalPost: data.length,
      data: data.slice(firstIndexPost, lastIndexPost),
      message: "Success",
    });
  });
});

app.post("/search", (req, res) => {
  if (!req.body) return new Error("Please Provide Data");
  let q = `select * from productList where name like '${req.body.search}%'`;
  conn.query(q, (err, data) => {
    if (err) return new Error(err);
    res.status(200).send({
      data: data,
      message: "Searched Done",
    });
  });
});

app.post("/add", (req, res) => {
  if (!req.body) return new Error("Pleace Provide Data");
  const q = `insert into productList (name, price, quantity, instock) values('${req.body.name}', ${req.body.price}, ${req.body.quantity}, ${req.body.instock}) `;
  conn.query(q, (err, data) => {
    if (err) return new Error(err);
    res.status(200).send({
      data: data,
      message: "Success",
    });
  });
});

app.delete(`/delete/:id`, (req, res) => {
  if (!req.params) return new Error("Pleace Provide ID");
  let q = `delete from  productList where id = ${req.params.id}`;
  conn.query(q, (err, data) => {
    if (err) return new Error(err);
    res.status(200).send({
      data: data,
      message: "Data Deleted",
    });
  });
});

app.put(`/updateList/:id`, (req, res) => {
  if (!req.body) return new Error("Please Provide Data");
  let q = `update productList set name= '${req.body.name}', price= ${req.body.price}, quantity= ${req.body.quantity}, instock= ${req.body.instock} where id = ${req.params.id}`;
  conn.query(q, (err, data) => {
    if (err) return new Error(err);
    res.status(200).send({
      messae: "Data Updated",
    });
  });
});

app.listen(PORT, console.log("App Running on", PORT));
