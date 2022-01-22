const express = require("express");
const router = express.Router();

const { ctrlWrapper, validation } = require("../../middlewares");
const { contactsControllers } = require("../../controllers");
const { joiSchema, updateActiveJoiSchema } = require("../../models/contacts");

router.get("/", ctrlWrapper(contactsControllers.getAll));

router.get("/:contactId", ctrlWrapper(contactsControllers.getById));

router.post(
  "/",
  validation(joiSchema, "missing required name field"),
  ctrlWrapper(contactsControllers.add)
);

router.delete("/:contactId", ctrlWrapper(contactsControllers.removeById));

router.put(
  "/:contactId",
  validation(joiSchema, "missing fields"),
  ctrlWrapper(contactsControllers.updateActive)
);

router.patch(
  "/:contactId",
  validation(updateActiveJoiSchema, "missing field favorite"),
  ctrlWrapper(contactsControllers.updateById)
);

module.exports = router;
