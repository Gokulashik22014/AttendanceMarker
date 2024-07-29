import React, { useState } from "react";
import {useNavigate} from "react-router-dom"
import axios from "axios";
const LoginRegister = () => {
  const navigate=useNavigate()

  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleRegisterUser = async (e) => {
    // e.preventDefault()
    try {
      const result = await axios.post("http://localhost:3000/api/user/create", {
        username: username,
        email: email,
        password: password,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const handleLogin = async () => {
    // e.preventDefault()
    try {
      await axios.post("http://localhost:3000/api/user/login", {
        email: email,
        password: password,
      }).then((response)=>{
        if(response.data.success){
          localStorage.setItem("username",response.data.message.username)
          localStorage.setItem("id",response.data.message.id)
          navigate("/")
        }
      });
      
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div
        className={`hero-content ${
          isLogin ? "flex-row-reverse" : "flex-row"
        } duration-500 transition-all ease-in-out`}
      >
        <div className="text-center lg:text-left w-1/3">
          <h1 className="text-5xl font-bold">
            {isLogin ? "Login" : "Register"} now!
          </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            {!isLogin && (
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Username</span>
                </label>
                <input
                  type="username"
                  placeholder="Username"
                  className="input input-bordered"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            )}
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
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary" onClick={isLogin?handleLogin:handleRegisterUser}>
                {isLogin ? "Login" : "Register"}
              </button>
            </div>
          </div>
          <div className="flex space-x-2 items-center justify-center">
            <p className="text-sm mb-2 text-base-400">
              {isLogin ? "Dont have an account?" : "Already have an account"}
            </p>
            <button
              className="text-sm mb-2 text-base-400 font-semibold"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? "Register Account" : "Login"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;
