import mongoose from "mongoose";

const otpSchema=mongoose.Schema({
    email:String,
    otp:Number,
    expiresAt:Date,
})

const OTP=mongoose.model("OTP",otpSchema)

export default OTP