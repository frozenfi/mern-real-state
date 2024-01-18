import express from "express";
import {
  signUpController,
  signInController,
  googleController,
  signOut,
} from "../controllers/auth.controller.js";

const authRouter = express.Router();

authRouter.post("/signup", signUpController);
authRouter.post("/signin", signInController);
authRouter.post("/google", googleController);
authRouter.get("/signout", signOut);

export default authRouter;
