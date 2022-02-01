const express = require("express");
const router = express.Router();

const { ctrlWrapper, validation, authenticate } = require("../../middlewares");
const { contactsControllers } = require("../../controllers");
const { joiSchema, updateActiveJoiSchema } = require("../../models/contacts");

router.get("/", ctrlWrapper(contactsControllers.getAll));

router.get(
  "/:contactId",
  ctrlWrapper,
  authenticate(contactsControllers.getById)
);

router.post(
  "/",
  validation(joiSchema, "missing required name field"),
  ctrlWrapper(contactsControllers.add)
);

router.delete(
  "/:contactId",
  ctrlWrapper,
  authenticate(contactsControllers.removeById)
);

router.put(
  "/:contactId",
  validation(joiSchema, "missing fields"),
  authenticate,
  ctrlWrapper(contactsControllers.updateActive)
);

router.patch(
  "/:contactId",
  validation(updateActiveJoiSchema, "missing field favorite"),
  authenticate,
  ctrlWrapper(contactsControllers.updateById)
);

module.exports = router;
