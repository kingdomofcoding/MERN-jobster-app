const CredentialsModel = require("../models/SchemaCredentials");
const { StatusCodes } = require("http-status-codes");
const getAllCredentials = async (req, res) => {
  const credentials = await CredentialsModel.find({});
  if (credentials && credentials.length) {
    res
      .status(StatusCodes.OK)
      .json({ credentials, credentialsLength: credentials.length });
  }
};
const postASingleCredential = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    throw new Error();
  }
  const credential = await CredentialsModel.create(req.body);
  if (credential) {
    res.status(200).json({ credential });
  } else {
    throw new Error(`no credential`);
  }
}; //
const getASingleCredential = async (req, res) => {};
const updateASingleCredential = async (req, res) => {
  const { id, username, password } = req.body;
  if (!id || !username || !password) {
    throw res.status(StatusCodes.BAD_REQUEST).json({
      msg: `id:${id},username:${username},password:${password} one or more of these is undefined ... error coming from updateASingleCredential from controllers`,
    });
  }
  try {
    const updated = await CredentialsModel.findOneAndUpdate(
      { _id: id },
      {
        username,
        password,
      },
      {
        new: true,
        runValidators: true,
      }
    );
    if (updated) {
      res.status(StatusCodes.OK).json({ updated });
    } else {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ error: `credential not found` });
    }
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: `an error occured while updating the credential. coming from controllers updateASingleCredential`,
    });
  }
};
//
const deleteASingleCredential = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    res.status(StatusCodes.BAD_REQUEST).json({ msg: `id was not passed` });
  }

  try {
    const response = await CredentialsModel.findByIdAndDelete({ _id: id });
    res.status(StatusCodes.OK).json({ response });
  } catch (err) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: `internal server error` });
  }
};
module.exports = {
  getAllCredentials,
  postASingleCredential,
  updateASingleCredential,
  deleteASingleCredential,
};
