const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dbConnection = require("./config/db");

const urlController = require("./controllers/url.controller");

const urlRouter = require("./routes/url.routes");

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ limit: "50mb", extended: false }));
app.use(bodyParser.json({ type: "application/json", limit: "50mb" }));

dbConnection.dbConnect();

app.get("/urls", (req, res) => {
  res.send("Welcome to URL Shortener Application.");
});

app.use("/", urlRouter);

app.listen(8000, () => {
  console.log("everything ran succesfully.");
});
