import { createTheme } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { authContext, useAuth } from "../../context/AuthContextProvider";
import "./Auth.css";

const theme = createTheme();
const Auth = () => {
  const navigate = useNavigate();
  const {
    email,
    password,
    emailError,
    passwordError,
    hasAccount,
    setPassword,
    setEmail,
    setHasAccount,
    handleLogin,
    handleSignup,
  } = useAuth(authContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  return (
    <>
      <div className="section">
        <div className="container">
          <div>
            <div>
              <div>
                <h2 className="mb-0 pb-3">
                  <span>Log In </span>
                  <span>Sign Up</span>
                </h2>
                <input
                  className="checkbox"
                  type="checkbox"
                  id="reg-log"
                  name="reg-log"
                />
                <label for="reg-log"></label>
                <div className="card-3d-wrap">
                  <div className="card-3d-wrapper">
                    <div className="card-front">
                      <div className="form-group"></div>
                      <h2 style={{ textAlign: "center", marginTop: "20px" }}>
                        Log in
                      </h2>
                      <div
                        style={{ marginBottom: "40px" }}
                        className="form-group mt-2"
                        onSubmit={handleSubmit}
                      ></div>
                      <input
                        style={{
                          fontSize: "20px",
                          marginBottom: "20px",
                          width: "80%",
                          height: "50px",
                        }}
                        placeholder="Your Email"
                        name="email"
                        id="email"
                        helperText={emailError}
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                      <input
                        style={{
                          fontSize: "20px",
                          marginBottom: "20px",
                          width: "80%",
                          height: "50px",
                        }}
                        placeholder="Your Password"
                        name="password"
                        id="password"
                        type="password"
                        helperText={passwordError}
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                      />
                      <div></div>
                      <button
                        style={{
                          color: "#181818",
                          width: "40%",
                          height: "60px",
                          marginTop: "65px",
                        }}
                        onClick={() => {
                          handleLogin();
                          navigate("/");
                        }}
                      >
                        Log In
                      </button>
                    </div>
                    <div className="card-back">
                      <div className="center-wrap"></div>
                      <h2 style={{ marginTop: "20px" }}>Sing up</h2>
                      <div style={{ marginTop: "40px" }}>
                        <input
                          style={{
                            fontSize: "20px",
                            marginBottom: "20px",
                            width: "80%",
                            height: "50px",
                          }}
                          placeholder="Your Email"
                          name="email"
                          id="email"
                          helperText={emailError}
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                        />
                      </div>
                      <input
                        style={{
                          fontSize: "20px",
                          marginBottom: "20px",
                          width: "80%",
                          height: "50px",
                        }}
                        placeholder="Your Password"
                        name="password"
                        id="password"
                        type="password"
                        helperText={passwordError}
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                      />
                      <div style={{ marginTop: "65px" }}>
                        <button
                          style={{
                            color: "#181818",
                            width: "40%",
                            height: "60px",
                            fontSize: "20px",
                          }}
                          onClick={() => {
                            handleSignup();
                            navigate("/");
                          }}
                        >
                          Sign Up
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Auth;
