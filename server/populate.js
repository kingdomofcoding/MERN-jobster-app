require("dotenv").config();
const mongoose = require("mongoose");
const CredentialsModel = require("./models/SchemaCredentials");

const jsonCredentials = require("./database/database.json");

const loadCredentials = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await CredentialsModel.deleteMany();
    await CredentialsModel.create(jsonCredentials);
    process.exit(0);
  } catch (err) {
    console.log(`credentials error`, err, `credentials error`);
    process.exit(1);
  }
};
loadCredentials();
