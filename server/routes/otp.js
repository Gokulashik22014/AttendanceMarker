import express from "express"
import { generateOTP, verifyOTP } from "../controllers/otp.js"

const router=express.Router()

router.route("/generateOTP").post(generateOTP)
router.route("/verifyOTP").post(verifyOTP)
export default router