const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const CredentialsSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    // createdBy: {
    //   type: mongoose.Types.ObjectId,
    //   ref: "Credential",
    //   required: [true, "Please provide user"],
    // },
  },
  { timestamps: true }
);

// CredentialsSchema.pre("save", async function () {
//   const salt = await bcrypt.genSalt(2);
//   this.password = await bcrypt.hash(this.password, salt);
// });
module.exports = mongoose.model("Credential", CredentialsSchema);
