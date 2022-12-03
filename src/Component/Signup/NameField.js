import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const NameField = ({
  step,
  incrementStepHandelar,
  decrementStepHandelar,
  onFirstNameHandelar,
  onLastNameHandelar,
}) => {
  console.log(step);

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="card-container card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-xl font-semibold mt-20 mb-20">
            Sign Up Form
          </h2>

          <form>
            <input
              type="text"
              name="firstName"
              placeholder="Write First Name"
              className="input w-full max-w-xs"
              required
              onBlur={onFirstNameHandelar}
            />
            <label className="label">
              {/* <span className="label-text-alt">{firstNameError}</span> */}
            </label>
            <input
              type="text"
              name="lastName"
              placeholder="Write Last Name"
              className="input w-full max-w-xs"
              required
              onBlur={onLastNameHandelar}
            />
            <label className="label">
              {/* <span className="label-text-alt">{lastNameError}</span> */}
            </label>
          </form>
          <div className="button-group">
            {step > 1 && <Link onClick={decrementStepHandelar}>Back</Link>}
            <button
              className="btn btn-primary w-24 mt-12"
              onClick={incrementStepHandelar}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NameField;
