import React, { useState } from "react";
import OtpInput from "react-otp-input";
import { useParams } from "react-router-dom";
import axios from "axios"
const Verify = () => {
  const [otp, setOtp] = useState("");
  const [roll, setRoll] = useState("");
  const [email,setEmail]=useState("")
  const { id } = useParams();
  const generateaOTP=async()=>{
    await axios.post("http://localhost:3000/api/otp/generateOTP",{email}).then((response)=>{
      if(response.data.success){
        alert("OTP sent")
      }else{
        alert("Something went wrong")
      }
    })
  }
  const verifyOTP=async()=>{
    await axios.post("http://localhost:3000/api/otp/verifyOTP",{email,otp,id,rollno:roll}).then((response)=>{
      if(response.data.success){
        alert(response.data.message)
      }else{
        alert("Something went wrong")
      }
    })
  }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Roll No</span>
            </label>
            <input
              type="Roll No"
              placeholder="Roll No"
              className="input input-bordered"
              required
              value={roll}
              onChange={(e)=>setRoll(e.target.value)}
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary" onClick={generateaOTP}>Get OTP</button>
          </div>
        </div>
        <div className="flex flex-col space-y-3 justify-center items-center mb-2">
          <div className="w-1/2 flex justify-center items-center">
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={4}
              renderSeparator={<span>-</span>}
              renderInput={(props) => <input {...props} />}
              containerStyle="border p-2 rounded-md"
              inputStyle="border rounded-md mx-1 focus:outline-none"
            />
          </div>
          <button className="btn btn-primary" onClick={verifyOTP}>Verify OTP</button>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Verify;
