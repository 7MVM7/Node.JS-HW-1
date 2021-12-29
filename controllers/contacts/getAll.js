const { Contact } = require("../../models");
const { successfull } = require("../../status");

const getAll = async (req, res) => {
  const result = await Contact.find({}, "_id name email favorite");
  successfull(res, { result });
};

module.exports = getAll;
