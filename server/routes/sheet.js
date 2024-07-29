import { createSheet, getAllSheet, getOneSheet, markAttendence } from "../controllers/sheet.js";
import express from "express"
const router=express.Router()

router.route("/create").post(createSheet)
router.route("/markatt").post(markAttendence)
router.route("/getall").get(getAllSheet)
router.route("/getone").get(getOneSheet)
export default router;