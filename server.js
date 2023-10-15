// Budget API

const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const cors = require("cors");
const mongoose = require("mongoose");
bodyParser = require("body-parser");
const app = express();
const port = 3000;
const chart_Data = require("./chartData.json");
var pie_chartData = chart_Data;
var dJs_data = chart_Data.DChart;
const url = "mongodb://localhost:27017";
const dbName = "chatDb";
app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use("/", express.static("public"));
app.get("/hello", (req, res) => {
  res.send("hello");
});
mongoose
  .connect("mongodb://localhost:27017/mongoDbDemo", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1); // Exit the application if unable to connect to the database
  });

// app.get("/budget", (req, res) => {
//   res.json(pie_chartData);
// });

const entriesRouter = require("./curd");
app.use("/api", entriesRouter);

app.listen(port, () => {
  console.log(`API served at http://localhost:${port}`);
});
