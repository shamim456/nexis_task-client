import React from "react";
import { Link } from "react-router-dom";

const PasswordField = ({
  step,
  decrementStepHandelar,
  onPasswordHandelar,
  onSubmit,
}) => {
  console.log(step);
  return (
    <div>
      <div className="h-screen flex justify-center items-center">
        <div className="card-container card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="text-center text-xl font-semibold mt-20 mb-20">
              Sign Up Form
            </h2>

            <form onSubmit={onSubmit}>
              <input
                type="password"
                placeholder="Enter Your Password"
                className="input w-full max-w-xs"
                onBlur={onPasswordHandelar}
              />
              <div className="button-group w-9/12 flex  justify-around">
                {step > 1 && <Link className="btn btn-white w-24 mt-12" onClick={decrementStepHandelar}>Back</Link>}
                <button type="submit" className="btn btn-primary w-24 mt-12">
                  Signup
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* .......................................... */}
      {/* <div className="button-group">
        {step > 1 && <Link onClick={decrementStepHandelar}>Back</Link>}
        <button type="submit" className="btn btn-primary w-24 mt-12">
          Log In
        </button>
      </div> */}
    </div>
  );
};

export default PasswordField;
