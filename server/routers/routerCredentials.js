const express = require("express");
const router = express.Router();
const {
  getAllCredentials,
  postASingleCredential,
  updateASingleCredential,
  deleteASingleCredential,
} = require("../controllers/controllerCredentials");
router.route("/").get(getAllCredentials).post(postASingleCredential);
router
  .route("/:id")
  .patch(updateASingleCredential)
  .delete(deleteASingleCredential);
module.exports = router;
