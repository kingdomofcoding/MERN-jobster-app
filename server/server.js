require("dotenv").config();
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const CredentialsRouter = require("./routers/routerCredentials");
const cors = require("cors");
const server = express();
server.use(cors());
server.use(express.json());
server.use(express.static(path.resolve(__dirname, "../client/dist")));
server.use("/api/v1", CredentialsRouter);
server.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/dist", "index.html"));
});
const start = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://ceemoney:washingtonheights@cluster0.2dwuveb.mongodb.net/020-Credentials-API?retryWrites=true&w=majority&appName=Cluster0"
    );
    server.listen(3009, () => console.log(`server has started on port 3009`));
  } catch (err) {
    console.log(err);
  }
};

start();
