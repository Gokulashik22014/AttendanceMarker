import OTP from "../models/opt.js";
import sheet from "../models/sheets.js";
import nodemailer from "nodemailer";

export const generateOTP = async (req, res) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", // Use Gmail's SMTP server
    port: 587,
    secure: false,
    auth: {
      user: process.env.GMAIL,
      pass: process.env.APP_PASS, // You should use an app password here
    },
  });
  try {
    const { email } = req.body;
    const otp = Math.floor(1000 + Math.random() * 9000);
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000);
    await OTP.create({ email, otp, expiresAt });
    const mailOptions = {
      from: process.env.GMAIL,
      to: email,
      subject: "Your OTP Code",
      text: ` Your OTP code is ${otp}. It expires in 10 minutes.`,
    };
    await transporter.sendMail(mailOptions);
    res.json({success:true,message:"Successfullt sent"})
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Failed to send OTP" });
  }
};

export const verifyOTP = async (req, res) => {
  try {
    const { otp, email, id, rollno } = req.body;

    const result = await OTP.find({ email, otp });
    if (!result || result.expiresAt < Date.now()) {
      res.json({ success: false, message: "Invalid" });
      return;
    }
    const updatedField = `data.${rollno}`;
    const update = { $set: { [updatedField]: true } };

    await sheet.findByIdAndUpdate(id, update, { new: true });
    await OTP.deleteOne({email,otp})
    res.json({ success: true, message: "You are present" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "An error occurred" });
  }
};
