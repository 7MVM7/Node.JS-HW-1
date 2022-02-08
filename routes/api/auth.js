const express = require("express");
const router = express.Router();

const { joiSchema } = require("../../models/user");
const {
  ctrlWrapper,
  validation,
  authenticate,
  upload,
} = require("../../middlewares");
const { usersControllers } = require("../../controllers");

router.post(
  "/signup",
  validation(joiSchema),
  ctrlWrapper(usersControllers.signup)
);

router.get("/verify/:verificationToken", usersControllers.verify);
router.post("/verify", usersControllers.emailVerification);

router.post(
  "/login",
  validation(joiSchema),
  ctrlWrapper(usersControllers.login)
);
router.post("/logout", authenticate, ctrlWrapper(usersControllers.logout));
router.get("/current", authenticate, ctrlWrapper(usersControllers.current));
router.patch(
  "/avatars",
  [authenticate, upload.single("avatar")],
  usersControllers.avatar
);
module.exports = router;
