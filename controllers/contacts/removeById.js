const { NotFound } = require("http-errors");
const { Contact } = require("../../models");
const { successfull } = require("../../status");

const deleteContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndDelete(contactId);
  if (!result) {
    throw new NotFound(404, `Contact with id=${contactId} not found`);
  }
  successfull(res, { message: "Successful delete operation" });
};

module.exports = deleteContact;
