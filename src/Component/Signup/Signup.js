import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NameField from "./NameField";
import NumberEmailField from "./NumberEmailField";
import PasswordField from "./PasswordField";
import peopleImage from '../../image/istockphoto-1321277096-612x612 1.png'

const Signup = () => {
  // for showing conditional component
  const [step, setStep] = useState(1);
  const [error, setError] = useState("");

  // collect user full information
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  // for increament & decrement step value
  const incrementStepHandelar = () => {
    setStep(step + 1);
  };
  const decrementStepHandelar = () => {
    setStep(step - 1);
  };

  // all info collection handelar
  const onFirstNameHandelar = (e) => {
    const firstName = e.target.value;
    setUserInfo({ ...userInfo, firstName: firstName });
  };
  const onLastNameHandelar = (e) => {
    const lastName = e.target.value;
    setUserInfo({ ...userInfo, lastName: lastName });
  };
  const onPhoneNumberHandelar = (e) => {
    const phoneNumber = e.target.value;
    setUserInfo({ ...userInfo, phoneNumber: phoneNumber });
  };
  const onEmailHandelar = (e) => {
    const userEmail = e.target.value;
    setUserInfo({ ...userInfo, email: userEmail });
  };
  const onPasswordHandelar = (e) => {
    const userPassword = e.target.value;
      setUserInfo({ ...userInfo, password: userPassword });
      setError(null);
    if (userPassword.length < 8) {
      setError("Your Password Must Be 8 Character");
    } 
  };
  console.log(error);

  // user info destructure
  const { firstName, lastName, email, phoneNumber, password } = userInfo;

  // submit handelar
  const onSubmit = (e) => {
    e.preventDefault();
    const user = {
      first_name: firstName,
      last_Name: lastName,
      email,
      phone_number: '+880'+phoneNumber,
      password,
    };
  
    // send data to server
    fetch("https://test.nexisltd.com/signup", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .then(navigate("/test"));
  };

  return (
    <div className="flex sm:justify-center justify-between items-center">
      <div className="sm:hidden md:hidden lg:block">
        <img src={peopleImage} alt="peopleImage" />
      </div>

      {step === 1 && (
        <NameField
          step={step}
          decrementStepHandelar={decrementStepHandelar}
          incrementStepHandelar={incrementStepHandelar}
          onFirstNameHandelar={onFirstNameHandelar}
          onLastNameHandelar={onLastNameHandelar}
        ></NameField>
      )}
      {step === 2 && (
        <NumberEmailField
          step={step}
          decrementStepHandelar={decrementStepHandelar}
          incrementStepHandelar={incrementStepHandelar}
          onPhoneNumberHandelar={onPhoneNumberHandelar}
          onEmailHandelar={onEmailHandelar}
        ></NumberEmailField>
      )}
      {step === 3 && (
        <PasswordField
          onSubmit={onSubmit}
          step={step}
          decrementStepHandelar={decrementStepHandelar}
          incrementStepHandelar={incrementStepHandelar}
          onPasswordHandelar={onPasswordHandelar}
        ></PasswordField>
      )}
    </div>
  );
};

export default Signup;
