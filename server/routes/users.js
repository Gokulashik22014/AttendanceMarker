import { createUser, loginUser } from "../controllers/users.js"
import express from "express"
const router=express.Router()

router.route("/create").post(createUser)
router.route("/login").post(loginUser)
export default router;