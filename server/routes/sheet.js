import { createSheet, getAllSheet, markAttendence } from "../controllers/sheet.js";
import express from "express"
const router=express.Router()

router.route("/create").post(createSheet)
router.route("/markatt").post(markAttendence)
router.route("/getall").get(getAllSheet)
export default router;