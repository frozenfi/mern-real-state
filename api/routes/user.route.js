import express from "express";
import { testRoute, updateUser } from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const userRouter = express.Router();

userRouter.get("/test", testRoute);
userRouter.post("/update/:id", verifyToken, updateUser);

export default userRouter;
