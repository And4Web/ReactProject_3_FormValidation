import React, { useState } from "react";

export default function Main() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");

  const [eUsername, setEUsername] = useState("");
  const [eEmail, setEEmail] = useState("");
  const [ePassword, setEPassword] = useState("");
  const [eCPassword, setECPassword] = useState("");

  const [uColor, setUColor] = useState("");
  const [eColor, setEColor] = useState("");
  const [pColor, setPColor] = useState("");
  const [cpColor, setCPColor] = useState("");

  function submit() {
    if (username.length > 8) {
      setEUsername("");
      setUColor("green");
    } else {
      setEUsername("Please Enter a valid username.");
      setUColor("red");
    }

    if (email.includes("@")) {
      setEEmail("");
      setEColor("green");
    } else {
      setEEmail("Please Enter a valid Email.");
      setEColor("red");
    }

    if (password.length > 8 && password.includes("*")) {
      setEPassword("");
      setPColor("green");
    } else {
      setEPassword("Please Enter a valid password.");
      setPColor("red");
    }

    if (cPassword === password) {
      setECPassword("");
      setCPColor("green");
    } else {
      setECPassword("Password doesn't match.");
      setCPColor("red");
    }
  }

  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-6 shadow-lg p-3 mb-5 bg-white rounded ">
          <h1>Form Validation</h1>
          <input
            type="text"
            placeholder="Username"
            className="form-control"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            style={{ borderColor: uColor }}
          />
          <small>{eUsername}</small>
          <input
            type="email"
            placeholder="Email"
            className="form-control"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            style={{ borderColor: eColor }}
          />
          <small>{eEmail}</small>
          <input
            type="password"
            placeholder="Password"
            className="form-control"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            style={{ borderColor: pColor }}
          />
          <small>{ePassword}</small>
          <input
            type="text"
            placeholder="Confirm Password"
            className="form-control"
            value={cPassword}
            onChange={(e) => {
              setCPassword(e.target.value);
            }}
            style={{ borderColor: cpColor }}
          />
          <small>{eCPassword}</small>
          <div>
            <button
              className="btn bg-success text-light"
              onClick={() => submit()}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
