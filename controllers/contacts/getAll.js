const { successfull } = require("../../status");
const { Contact } = require("../../models");

const getAll = async (req, res) => {
  const { page, limit } = req.query;
  const skip = (page - 1) * limit;
  const userId = req.user.id;
  const result = await Contact.find(
    { owner: userId },
    "_id name email phone favorite",
    { skip, limit: +limit }
  );
  successfull(res, { result });
};

module.exports = getAll;
