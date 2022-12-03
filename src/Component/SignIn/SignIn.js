import React from "react";
import "./Signin.css";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import peopleImage from "../../image/istockphoto-1321277096-612x612 1.png";

const SignIn = () => {
  // react hook form
  const {
    register,
    formState: { errors },
    handleSubmit,
    resetField,
  } = useForm();
  const navigate = useNavigate();

  let signInError;

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    resetField("email");
    resetField("password");
    const userinformaiton = { email, password };

    fetch("https://test.nexisltd.com/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userinformaiton),
    })
      .then((res) => res.json())
      .then((data) => localStorage.setItem("accessToken", data.access_token))
      .then(navigate("/test"));
  };
  return (
    <div className="flex sm:justify-center md:justify-center justify-between items-center">
      <div>
        <img src={peopleImage} alt="peopleImage" className="sm:hidden md:hidden lg:block" />
      </div>
      <div>
        <div className="h-screen flex justify-center items-center">
          <div className="card-container card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="text-center text-xl font-semibold mt-20 mb-20">
                Log In Form
              </h2>

              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col items-center">
                  {/* email field */}
                  <div className="form-control w-full max-w-xs">
                    <input
                      type="email"
                      placeholder="Write Email Adress"
                      className="input w-full max-w-xs"
                      {...register("email", {
                        required: {
                          value: true,
                          message: "Email Is Required",
                        },
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Provide A Valid Email",
                        },
                      })}
                    />
                    <label className="label">
                      {/* error for required */}
                      {errors.email?.type === "required" && (
                        <span className="label-text-alt">
                          {errors.email.message}
                        </span>
                      )}
                      {/* error for pattern */}
                      {errors.email?.type === "pattern" && (
                        <span className="label-text-alt">
                          {errors.email.message}
                        </span>
                      )}
                    </label>
                  </div>

                  {/* password field */}
                  <div className="form-control w-full max-w-xs">
                    <input
                      type="password"
                      placeholder="Write Your Password"
                      className="input w-full max-w-xs mt-12"
                      {...register("password", {
                        required: {
                          value: true,
                          message: "Password Is Required",
                        },
                        minLength: {
                          value: 8,
                          message: "Your Password Must Be 8 Character",
                        },
                      })}
                    />
                    <label className="label">
                      {/* error for required */}
                      {errors.password?.type === "required" && (
                        <span className="label-text-alt">
                          {errors.password.message}
                        </span>
                      )}
                      {/* error for minLength */}
                      {errors.password?.type === "minLength" && (
                        <span className="label-text-alt">
                          {errors.password.message}
                        </span>
                      )}
                    </label>
                  </div>

                  {/* <input type="submit" />  */}
                  {signInError}
                  <button type="submit" className="btn btn-primary w-24 mt-12">
                    Log In
                  </button>
                </div>
              </form>
              <span className="signupLink w-64 flex ">
                <p>
                  <small>Don't Have An Account ? </small>
                </p>{" "}
                <Link
                  className="signup-link ml-3.5 text-primary font-semibold"
                  to="/signup"
                >
                  SIGNUP HERE
                </Link>{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
