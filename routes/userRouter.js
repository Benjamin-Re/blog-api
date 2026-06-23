import { Router } from "express";
import { addUser, login } from "../controllers/userController.js";

const userRouter = Router();

userRouter.post("/signup", addUser);
userRouter.post("/login", login);

export default userRouter;
