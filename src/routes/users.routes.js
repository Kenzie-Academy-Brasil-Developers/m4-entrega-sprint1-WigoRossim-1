import { Router } from "express";

import createUserController from "../controllers/createUser.controller";
import deleteUserController from "../controllers/deleteUser.controler";
import listUserController from "../controllers/listUser.controller";
import profileUserController from "../controllers/profileUser.controller";
import updateUserController from "../controllers/updateUser.controller";

import verifyAuthTokenMiddleware from "../middleware/verifyAuthToken.middlewares";
import verifyEmailAvailability from "../middleware/verifyEmailAvailability.middlewares";
import verifyIsAdmMiddleware from "../middleware/verifyIsAdm.middleware";

const router = Router();

router.post("", verifyEmailAvailability, createUserController);
router.get(
  "",
  verifyAuthTokenMiddleware,
  verifyIsAdmMiddleware,
  listUserController
);
router.get("/profile", verifyAuthTokenMiddleware, profileUserController);
router.patch("/:uuid", verifyAuthTokenMiddleware, updateUserController);
router.delete("/:uuid", verifyAuthTokenMiddleware, deleteUserController);

export default router;
