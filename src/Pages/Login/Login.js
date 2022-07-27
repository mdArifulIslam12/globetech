import React from "react";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import vector from "../../assets/Vector 1.png";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [shown, setShown] = useState(false);
  return (
    <div className="container-fluid login">
      {/* <div className="input">
        <input type={shown ? "text" : "password"} />
        {
          shown ? <FiEye className="reveal" onClick={() => setShown(!shown)} /> : <FiEyeOff className="reveal" onClick={() => setShown(!shown)} />
        }
      </div> */}
      <div className="row">
        <div className="col-lg-4 herder-page pt-5 ">
          <h2 className="pt-4">Globetech Company Limited</h2>
          <p>Make yourself digitalized & more effecient</p>
          <div className="login-page-img">
            <Link to="/">
              <img
                src={vector}
                alt=""
                style={{ width: "23px", height: "34px" }}
              />
            </Link>
          </div>
        </div>
        <div className="col-lg-8 login-pages ">
         <div className="login-from ">
         <div className=" login-input">
            <h2 className="text-center">Welcome</h2>
            <p className="text-center">Sign in to your account</p>
            <form className="">
              <div class="mb-3">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-100 p-2"
                />
              </div>
              <div class="mb-3">
                <input
                  type={shown ? "text" : "password"}
                  placeholder="Password"
                  className='w-100 input-password p-2'
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                />
                {shown ? (
                  <FiEye className="reveal" onClick={() => setShown(!shown)} />
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
