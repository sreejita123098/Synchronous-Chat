import express from "express";
import {signup, login, logout,getUserProfile } from "../controller/user.controller.js";
import { get } from "mongoose";
import secureRoute from "../middleware/secureRoute.js";

const router =express.Router();

router.post("/logout",logout);

router.post("/login",login);

router.post("/signup",signup);

router.get("/getuserprofile",secureRoute,getUserProfile);

export default router;