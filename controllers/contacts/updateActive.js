const { NotFound } = require("http-errors");
const { Contact } = require("../../models");
const { successfull } = require("../../status");

const updateContact = async (req, res) => {
  const { contactId } = req.params;
  const { favorite } = req.body;
  const userId = req.user.id;
  const result = await Contact.findByIdAndUpdate(
    { _id: contactId, owner: userId },
    { favorite },
    { new: true }
  );
  if (!result) {
    throw new NotFound(404, `Contact with id=${contactId} not found`);
  }
  successfull(res, { result });
};

module.exports = updateContact;
