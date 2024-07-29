import React, { useState } from "react";
import OtpInput from "react-otp-input";
const Verify = () => {
  const [otp, setOtp] = useState();
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
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
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Get OTP</button>
          </div>
        </form>
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
          <button className="btn btn-primary">Verify OTP</button>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Verify;
