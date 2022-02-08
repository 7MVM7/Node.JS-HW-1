const { NotFound } = require("http-errors");
const { Contact } = require("../../models");
const { successfull } = require("../../status");

const getContactById = async (req, res) => {
  const { contactId } = req.params;
  const userId = req.user.id;

  const result = await Contact.findById(
    { _id: contactId, owner: userId },
    "_id name email favorite"
  );
  if (!result) {
    throw new NotFound(404, `Contact with id=${contactId} not found`);
  }
  successfull(res, { result });
};

module.exports = getContactById;
