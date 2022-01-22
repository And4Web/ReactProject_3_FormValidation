import React from "react";

export default function Main() {
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-6 bg-secondary">
          <h1 className="bg-success">Form Validation</h1>
          <input type="text" placeholder="Username" className="form-control" />
          <input type="email" placeholder="Email" className="form-control" />
          <input
            type="password"
            placeholder="Password"
            className="form-control"
          />
          <input
            type="text"
            placeholder="Confirm Password"
            className="form-control"
          />

          <button className="btn bg-success">Submit</button>
        </div>
      </div>
    </div>
  );
}
