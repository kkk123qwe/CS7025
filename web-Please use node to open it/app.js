import express from "express";
import fs from "fs";
import bodyParser from "body-parser";
import mysql from "mysql";
import ejs from "ejs";
import path from "path";
import { fileURLToPath } from "url";

import https from "https";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// const _ = require("lodash");

let workitems = [];
const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "public")));

// 数据源：轮播图图片数组
const carouselImages = [
  { src: "-images-0.jpg", alt: "Slide 1", description: "First Slide" },
  { src: "-images-6.jpg", alt: "Slide 2", description: "Second Slide" },
  { src: "-images-11.jpg", alt: "Slide 3", description: "Third Slide" },
];

// mysql
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "15920307741",
  database: "todolist",
});

const sqlStr = "INSERT INTO golist (name) VALUES ?";
const sqlStrNN = "INSERT INTO newlist (name) VALUES ?";
const sqlStrD = "DELETE FROM golist WHERE id=?";
const arrval = [
  ["How can I bring your idea to life?"],
  ["Hit the + button to add a new comment"],
  ["Hit this to delete an comment"],
];

app.get("/", function (req, res) {
  res.render("home");
});

app.get("/about", function (req, res) {
  fs.readFile("jobs.json", "utf8", (err, data) => {
    if (err) {
      console.error("Error reading JSON file:", err);
      return res.status(500).send("Error loading job data.");
    }

    const jobs = JSON.parse(data); // 解析 JSON 数据
    res.render("about", { jobs }); // 传递数据到模板
  });
});

app.get("/contact", function (req, res) {
  db.query("SELECT * FROM golist", (err, foundITEMS) => {
    if (foundITEMS.length === 0) {
      db.query(sqlStr, [arrval], function (err, results) {
        if (err) {
          console.log(err.message);
        } else {
          console.log("成功");
        }
        res.redirect("/contact");
      });
    } else {
      res.render("contact", {
        LISTtitle: "YOUR COMMENT",
        newlistItems: foundITEMS,
      });
    }
  });
});

app.get("/work", function (req, res) {
  res.render("work");
});

app.get("/game", function (req, res) {
  res.render("game");
});

app.get("/ani", function (req, res) {
  res.render("ani", { images: carouselImages });
});

app.get("/code", function (req, res) {
  res.render("code");
});

app.post("/", function (req, res) {
  const query = req.body.CityName;
  const APPID = "99882baaab2eb8e4eba93562a22b4e23";
  const units = "metric";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=${units}&APPID=${APPID}`;
  https.get(url, function (response) {
    console.log(response.statusCode);
    response.on("data", function (data) {
      const DATA = JSON.parse(data);
      const temp = DATA.main.temp;
      const icon = DATA.weather[0].icon;
      const imgURL = `https://openweathermap.org/img/wn/${icon}@2x.png`;
      res.write(
        `<h1>The temperature in ${query} is ${temp} degrees Celcius.</h1>`
      );
      res.write(`<img src=${imgURL}>`);
      res.send();
    });
  });
});
// app.get("/:customListName", function (req, res) {
//   const customListName = req.params.customListName;

//   db.query(sqlStrNN, [arrval], function (err, results) {
//     if (err) {
//       console.log(err.message);
//     } else {
//       db.query(
//         "INSERT INTO newlist SET  ?",
//         { title: customListName },
//         function (err, resuilts) {
//           if (err) {
//             console.log(err.message);
//           } else {
//             console.log("newlistT成功");
//           }
//         }
//       );
//       console.log("newlistN成功");
//     }
//   });

//   res.render("list", { LISTtitle: "Work List", newlistItems: workitems });
// });

app.post("/contact", function (req, res) {
  let itemName = req.body.newItem;
  db.query(
    "INSERT INTO golist SET  ?",
    { name: itemName },
    function (err, results) {
      if (err) {
        console.log(err.message);
      } else {
        console.log("上传新数据");
      }
      res.redirect("/contact");
    }
  );
});

app.post("/delete", function (req, res) {
  const checkboxID = req.body.checkbox;
  db.query(sqlStrD, checkboxID, (err, results) => {
    if (err) return console.log(err.message);
    if (results.affectedRows === 1) {
      console.log("删除成功");
    }
    res.redirect("/contact");
  });
});

app.listen(3000, function () {
  console.log("Server on port 3000");
});
