import React from "react";
import StepButtons from "../../components/StepButtons/StepButtons";
import { steps } from "../../constants";

export default function PersonalInfo(props) {
  const [firstName, setFirstName] = React.useState(props.data.first_name || "");
  const [firstNameError, setFirstNameError] = React.useState(false);

  const [lastName, setLastName] = React.useState(props.data.last_name || "");
  const [lastNameError, setLastNameError] = React.useState(false);

  const [email, setEmail] = React.useState(props.data.email || "");
  const [emailError, setEmailError] = React.useState(false);

  const [phone, setPhone] = React.useState(props.data.phone || "");
  const [phoneError, setPhoneError] = React.useState(false);

  const validateInputs = () => {
    let isValid = true;

    if (!firstName.trim() || firstName.trim().length < 2) {
      setFirstNameError(true);
      isValid = false;
    } else {
      setFirstNameError(false);
    }

    if (!lastName.trim() || lastName.trim().length < 2) {
      setLastNameError(true);
      isValid = false;
    } else {
      setLastNameError(false);
    }

    if (
      !email.trim() ||
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)
    ) {
      setEmailError(true);
      isValid = false;
    } else {
      setEmailError(false);
    }

    if (!!phone.trim() && !phone.startsWith("+995")) {
      setPhoneError(true);
      isValid = false;
    } else {
      setPhoneError(false);
    }

    return isValid;
  };

  return (
    <div className="main">
      <div className="left">
        <h1 className="page-title">
          Hey, Rocketeer, what are your coordinates?
        </h1>

        <div className="form-container">
          <div>
            <input
              className={firstNameError ? "error" : ""}
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            {firstNameError && (
              <span className="error">Required. Min 2 characters</span>
            )}
          </div>

          <div>
            <input
              className={lastNameError ? "error" : ""}
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            {lastNameError && (
              <span className="error">Required. Min 2 characters</span>
            )}
          </div>

          <div>
            <input
              className={emailError ? "error" : ""}
              placeholder="E Mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && (
              <span className="error">
                Required. Should match E Mail format
              </span>
            )}
          </div>

          <div>
            <input
              className={phoneError ? "error" : ""}
              placeholder="+995 5__ __ __ __"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            {phoneError && (
              <span className="error">
                Should match Georgian phone number "+995 5..."
              </span>
            )}
          </div>

          <StepButtons
            step={steps[1]}
            onPrev={() => props.setCurrentStep(steps[0])}
            onNext={() => {
              if (validateInputs()) {
                props.handleStepChange(
                  {
                    first_name: firstName,
                    last_name: lastName,
                    email: email,
                    phone: phone,
                  },
                  steps[2]
                );
              }
            }}
          />
        </div>
      </div>
      <div className="right">
        <h1 className="page-title">Redberry Origins</h1>
        <p>
          You watch “What? Where? When?” Yeah. Our founders used to play it.
          That’s where they got a question about a famous American author and
          screenwriter Ray Bradbury. Albeit, our CEO Gaga Darsalia forgot the
          exact name and he answered Ray Redberry. And at that moment, a name
          for a yet to be born company was inspired - Redberry 😇
        </p>
      </div>
    </div>
  );
}
