import React from "react";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import vector from "../../assets/Vector 1.png";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [shown, setShown] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    const password = event.target.password.value;
    const email = event.target.email.value;
    console.log(email, password);
    event.target.reset();
  };
  return (
    <div className="container-fluid login">
      <div className="row">
        <div className="col-lg-3 herder-page pt-5 ">
          <h2 className="pt-4">Globetech Company Limited</h2>
          <p>Make yourself digitalized & more effecient</p>
          <div className="login-page-img">
            <Link to="/">
              <img
                src={vector}
                alt=""
                style={{ width: "18px", height: "27px" }}
              />
            </Link>
          </div>
        </div>
        <div className="col-lg-9 login-pages ">
          <div className="login-from ">
            <div className=" login-input">
              <h2 className="text-center">Welcome</h2>
              <p className="text-center">Sign in to your account</p>
              <form className="" onSubmit={handleSubmit}>
                <div class="mb-3">
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    className="w-100 p-2"
                  />
                </div>
                <div class="mb-3">
                  <input
                    type={shown ? "text" : "password"}
                    placeholder="Password"
                    name="password"
                    className="w-100 input-password p-2"
                  />
                  {shown ? (
                    <FiEye
                      className="reveal"
                      onClick={() => setShown(!shown)}
                    />
                  ) : (
                    <FiEyeOff
                      className="reveal"
                      onClick={() => setShown(!shown)}
                    />
                  )}
                </div>
                <button type="submit" class="btn btn-primary w-100">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
