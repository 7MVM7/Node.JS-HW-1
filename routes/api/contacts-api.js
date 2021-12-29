const express = require("express");
const router = express.Router();

const { controllerWrapper, validation } = require("../../middlewares");
const { contactsControllers } = require("../../controllers");
const { joiSchema, updateActiveJoiSchema } = require("../../models/contacts");

router.get("/", controllerWrapper(contactsControllers.getAll));

router.get("/:contactId", controllerWrapper(contactsControllers.getById));

router.post(
  "/",
  validation(joiSchema, "missing required name field"),
  controllerWrapper(contactsControllers.add)
);

router.delete("/:contactId", controllerWrapper(contactsControllers.removeById));

router.put(
  "/:contactId",
  validation(joiSchema, "missing fields"),
  controllerWrapper(contactsControllers.updateActive)
);

router.patch(
  "/:contactId",
  validation(updateActiveJoiSchema, "missing field favorite"),
  controllerWrapper(contactsControllers.updateById)
);

module.exports = router;
