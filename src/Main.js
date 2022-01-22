import React, { useState } from "react";

export default function Main() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");

  function submit() {
    console.log(username + email + password + cPassword);
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
          />
          <input
            type="email"
            placeholder="Email"
            className="form-control"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Password"
            className="form-control"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Confirm Password"
            className="form-control"
            value={cPassword}
            onChange={(e) => {
              setCPassword(e.target.value);
            }}
          />

          <button
            className="btn bg-success text-light"
            onClick={() => submit()}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
