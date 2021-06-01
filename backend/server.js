const express = require("express");
const app = express();
const fs = require("fs");
const bodyParser = require("body-parser");
const cors = require("cors");
const { send } = require("process");
// import { v4 as uuidv4 } from 'uuid';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.all("*", function (req, res, next) {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "origin, content-type, accept");
  next();
});

const arrOfUSers = [
  { login: "test-login", pass: "test-pass" },
  { login: "artem@superuser", pass: "123456" },
  { login: "artem@rukovodstvo", pass: "123456" },
  { login: "artem@agro", pass: "123456" },
  { login: "artem@brigada", pass: "123456" },
  { login: "artem@sklad", pass: "123456" },
  { login: "artem@maksim", pass: "123456" },
];

app.post("/", function (req, res) {

  const resOfArr = arrOfUSers.find((el) => {
    if (el.pass === req.body.data.pass && el.login === req.body.data.login) {
      return el;
    }
  });

  if(!resOfArr) {
    res.status(401).send("Ошибка авторизации");
    return;
  } 
    
  const login = resOfArr.login.split("@")[1];

  switch (login) {
    case "superuser":
      res.status(201).json("/admin");
      break;

    case "rukovodstvo":
      res.status(201).json("/rukovodstvo");
      break;

    case "agro":
      res.status(201).json("/agro");
      break;

    case "brigada":
      res.status(201).json("/brigade");
      break;

    case "sklad":
      res.status(201).json("/sklad");
      break;

    default:
      res.status(403).json("У пользователя нет доступа");
      break;

  }

});

app.post("/admin", function (req, res) {
  const data = req.body.data;
  arrOfUSers.push(data);
  console.log(arrOfUSers);

  if (arrOfUSers.includes(data)) {
    res.status(200).send("Логин успешно зарегестрирован");
  } else {
    res.status(500).send("Ошибка добавления. Обратитесь к разработчику");
  }
});

app.listen(7778, () => {
  console.log("СЕРВЕР ЗАПУЩЕН");
});
