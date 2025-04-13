const express = require("express");
const app = express();
const port = 3001;
const mongoose = require("mongoose");
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.use(express.static("public"));


var methodOverride = require("method-override");
app.use(methodOverride("_method"));
const allRoutes = require("./routes/allRoutes");
const addUserRoute = require("./routes/addUser");
const addUserRoutee = require("./routes/addUserRoutee");





// Auto refresh
const path = require("path");
const livereload = require("livereload");

const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, "public"));

const connectLivereload = require("connect-livereload");
app.use(connectLivereload());

liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});

mongoose
  .connect(
    "mongodb://principia480:principia480123@ac-vboffrf-shard-00-00.9rnjzv2.mongodb.net:27017,ac-vboffrf-shard-00-01.9rnjzv2.mongodb.net:27017,ac-vboffrf-shard-00-02.9rnjzv2.mongodb.net:27017/?replicaSet=atlas-149led-shard-0&ssl=true&authSource=admin&retryWrites=true&w=majority&appName=walid-moh"
  )
  .then(() => {
    app.listen(port, () => {
      console.log(`http://localhost:${port}/`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.use(allRoutes);
app.use( "/user/add.html",addUserRoute);

app.use("/user/addEtud", addUserRoutee);


