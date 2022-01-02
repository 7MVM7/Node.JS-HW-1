const { Contact } = require("../../models");
const { successfull } = require("../../status");

const addContact = async (res, req) => {
  const result = await Contact.create(req.body);
  successfull(res, { result });
};

module.exports = addContact;
