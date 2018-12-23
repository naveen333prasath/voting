const express = require("express");
app = express();
const fs = require("fs");
const bodyparser = require("body-parser");
app.use(bodyparser.json());
app.use(
  bodyparser.urlencoded({
    extended: true
  })
);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/poll", (req, res) => {
  fs.readFile(__dirname + "/poll.json", "utf8", function(err, data) {
    res.send(data);
  });
});
app.post("/vote/new", (req, res) => {
  console.log(req.body);
});
app.post("/vote/new", (req, res) => {
  if (req.body.admk === "on") {
    choosePollOption(req, res, "admk");
  } else if (req.body.dmk === "on") {
    choosePollOption(req, res, "dmk");
  } else if (req.body.mdmk === "on") {
    choosePollOption(req, res, "dmk");
  } else {
    res.redirect("/?incorrect+input");
  }
});
function choosePollOption(req, res, topic) {
  let poll = {};
  fs.readFile(__dirname + "/poll.json", "utf8", function(err, data) {
    poll = JSON.parse(data);
    poll[topic] += 1;

    fs.writeFile(__dirname + "/poll.json", json, stringify(poll), function(
      err,
      data
    ) {
      console.log(err);
      console.groupCollapsed(data);
      res.status(200).send("want to <a href=" / ">vote</a>again");
    });
  });
  console.log(poll);
}
app.listen(3001, () => {
  console.log("listening on port 3001");
});
