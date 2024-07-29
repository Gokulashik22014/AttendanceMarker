import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

// routers
import sheetRouter from "./routes/sheet.js";
import otpRouter from "./routes/otp.js"
import userRouter from "./routes/users.js"

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

app.use("/api/sheet",sheetRouter)
app.use("/api/otp",otpRouter)
app.use("/api/user",userRouter)


mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(process.env.PORT, () => console.log(`The server is running at ${process.env.PORT}`))
  )
  .catch((error) => console.log(error));
