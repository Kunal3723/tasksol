import express from "express";
import { getInfo } from "../controllers/profile.js";
import auth from "../middleware/auth.js";
const router = express.Router();


router.get("/profile", auth, getInfo);


export default router;