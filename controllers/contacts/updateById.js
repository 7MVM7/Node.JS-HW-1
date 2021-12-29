const { NotFound } = require("http-errors");
const { Contact } = require("../../models");
const { successfull } = require("../../status");

const updateStatusContact = async (req, res) => {
  const { contactId } = req.params;
  const { favorite } = req.body;
  const result = await Contact.findByIdAndUpdate(
    contactId,
    { favorite },
    { new: true }
  );
  if (!result) {
    throw new NotFound(404, "Not found");
  }
  successfull(res, { result });
};

module.exports = updateStatusContact;
