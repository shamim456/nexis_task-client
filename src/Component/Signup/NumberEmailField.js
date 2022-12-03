import React from "react";
import { Link } from "react-router-dom";
import './NumberEmailField.css'

const NumberEmailField = ({
  step,
  setStep,
  decrementStepHandelar,
  incrementStepHandelar,
  onPhoneNumberHandelar,
  onEmailHandelar,
}) => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="card-container card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-xl font-semibold mt-20 mb-20">
            Sign Up Form
          </h2>
          <div className="flex">
            <input
              type="text"
              placeholder="+880"
              className="input max-w-xs fixed-input"
              disabled
            />
            <input
              type="text"
              placeholder="1xxxxxxxxx"
              className="input w-full max-w-xs pInput"
              onBlur={onPhoneNumberHandelar}
            />
          </div>
          <input
            type="email"
            placeholder="Write Email Adress"
            className="input w-full max-w-xs"
            onBlur={onEmailHandelar}
          />
          <div className="button-group w-9/12 flex  justify-around">
            {step > 1 && (
              <Link
                className="btn btn-white w-24 mt-12"
                onClick={decrementStepHandelar}
              >
                Back
              </Link>
            )}
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

export default NumberEmailField;
