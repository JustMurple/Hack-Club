import React, { useState, useRef } from "react";

function Login() {
  const [showLogin, setShowLogin] = useState(true);
  const [showLogPassword, setShowLogPassword] = useState(false);
  const [showRegPassword, setShowRegPassword] = useState(false);

  const logPasswordRef = useRef(null);
  const regPasswordRef = useRef(null);

  const toggleLogPassword = () => {
    setShowLogPassword((prev) => !prev);
  };

  const toggleRegPassword = () => {
    setShowRegPassword((prev) => !prev);
  };

  return (
    <div className="container">
      <div className="box">
        {showLogin ? (
         <div
            className="box-login"
            style={{ left: showLogin ? "27px" : "-350px" }}
            >
            <div className="top-header">
              <h3>Hello, Again</h3>
              <small>We are happy to have you back.</small>
            </div>
            <div className="input-group">
              <div className="input-field">
                <input type="text" className="input-box" required />
                <label>Email address</label>
              </div>
              <div className="input-field">
                <input
                  type={showLogPassword ? "text" : "password"}
                  className="input-box"
                  ref={logPasswordRef}
                  required
                />
                <label>Password</label>
                <div className="eye-area">
                  <div className="eye-box" onClick={toggleLogPassword}>
                    <i
                      className="fa-regular fa-eye"
                      style={{ opacity: showLogPassword ? 0 : 1 }}
                    ></i>
                    <i
                      className="fa-regular fa-eye-slash"
                      style={{ opacity: showLogPassword ? 1 : 0 }}
                    ></i>
                  </div>
                </div>
              </div>
              <div className="remember">
                <input type="checkbox" className="check" />
                <label>Remember Me</label>
              </div>
              <div className="input-field">
                <input type="submit" value="Sign In" className="input-submit" />
              </div>
              <div className="forgot">
                <a href="#">Forgot password?</a>
              </div>
            </div>
          </div>
        ) : (
        <div
         className="box-register"
         style={{ right: showLogin ? "-350px" : "27px" }}
        >
            <div className="top-header">
              <h3>Sign Up</h3>
              <small>We are happy to have you with us.</small>
            </div>
            <div className="input-group">
              <div className="input-field">
                <input type="text" className="input-box" required />
                <label>Username</label>
              </div>
              <div className="input-field">
                <input type="text" className="input-box" required />
                <label>Email address</label>
              </div>
              <div className="input-field">
                <input
                  type={showRegPassword ? "text" : "password"}
                  className="input-box"
                  ref={regPasswordRef}
                  required
                />
                <label>Password</label>
                <div className="eye-area">
                  <div className="eye-box" onClick={toggleRegPassword}>
                    <i
                      className="fa-solid fa-eye"
                      style={{ opacity: showRegPassword ? 0 : 1 }}
                    ></i>
                    <i
                      className="fa-regular fa-eye-slash"
                      style={{ opacity: showRegPassword ? 1 : 0 }}
                    ></i>
                  </div>
                </div>
              </div>
              <div className="remember">
                <input type="checkbox" className="check" />
                <label>Remember Me</label>
              </div>
              <div className="input-field">
                <input type="submit" value="Sign Up" className="input-submit" />
              </div>
            </div>
          </div>
        )}

        <div className="switch">
        <a
        href="#"
        className={`login ${showLogin ? "active" : ""}`}
        onClick={() => setShowLogin(true)}
        >
        Login
        </a>
        <a
        href="#"
        className={`register ${!showLogin ? "active" : ""}`}
        onClick={() => setShowLogin(false)}
        >
        Register
        </a>
        <div
        className="btn-active"
        style={{
        left: showLogin ? "0px" : "145px",
        }}
        ></div>
        </div>
      </div>
    </div>
  );
}

export default Login;