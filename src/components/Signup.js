import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="f-container">
      <div className="f-row">
        <div className="f-formGroups">
          <form>
            <h2 className="f-title">Register</h2>
            <div className="f-formGroup">
              <label htmlFor="username" className="f-label">
                Username
              </label>
              <input type="text" id="username" className="f-input" />
            </div>
            <div className="f-formGroup">
              <label htmlFor="email" className="f-label">
                Email
              </label>
              <input type="email" id="email" className="f-input" />
            </div>
            <div className="f-formGroup">
              <label htmlFor="password" className="f-label">
                Password
              </label>
              <input type="password" id="passsword" className="f-input" />
            </div>
            <div className="f-formGroup">
              <label htmlFor="cpassword" className="f-label">
                Confirm Password
              </label>
              <input type="password" id="cpasssword" className="f-input" />
            </div>
            <div className="f-formBtn">
              <button className="f-btn">Register</button>
            </div>
            <div className="f-formOther">
              <Link to="/login">Already Account</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
