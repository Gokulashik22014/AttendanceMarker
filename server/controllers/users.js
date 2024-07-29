import bcrypt from "bcrypt";
import users from "../models/users.js";

export const createUser = async (req, res) => {
  const saltRounds = 10;
  try {
    const { email, password, username } = req.body;
    bcrypt.hash(password, saltRounds, async (err, hash) => {
      if (err) {
        return res.status(500).json({ success: false, message: "Error hashing password", error: err });
      }
      try {
        const result = await users.create({ email: email, password: hash, username: username });
        return res.status(201).json({ success: true, message: "User created successfully", result: result });
      } catch (createError) {
        return res.status(500).json({ success: false, message: "Unable to create user", error: createError });
      }
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Something went wrong", error: error });
  }
};

export const loginUser=async(req,res)=>{
    try {
        const {email,password}=req.body
        const user=await users.findOne({email})
        if(!user){
            return res.status(400).json({success:false,message:"Can not find User"})
        }
        bcrypt.compare(password, user.password, function(err, result) {
            if(result){
                return res.status(201).json({success:true,message:{username:user.username,id:user._id}})
            }else{
                return res.status(403).json({success:false,message:"Check your info"})
            }
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: "Something went wrong", error: error });
    }
}
