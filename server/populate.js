require("dotenv").config();
const mongoose = require("mongoose");
const CredentialsModel = require("./models/SchemaCredentials");

const jsonCredentials = require("./database/database.json");

const loadCredentials = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://ceemoney:washingtonheights@cluster0.2dwuveb.mongodb.net/020-Credentials-API?retryWrites=true&w=majority&appName=Cluster0"
    );
    await CredentialsModel.deleteMany();
    await CredentialsModel.create(jsonCredentials);
    process.exit(0);
  } catch (err) {
    console.log(`credentials error`, err, `credentials error`);
    process.exit(1);
  }
};
loadCredentials();
