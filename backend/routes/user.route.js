import express from "express";
import {signup, login, logout } from "../controller/user.controller.js";

const router =express.Router();

router.post("/logout",logout);

router.post("/login",login);

router.post("/signup",signup);

export default router;