import React from "react";
import { steps } from "../../constants";

import RocketManIcon from "../../img/rocketman.svg";
import "./Welcome.css";

export default function Welcome(props) {
  return (
    <div className="welcome">
      <h1 className="title">Welcome Rocketeer !</h1>

      <div>
        <button
          className="start"
          onClick={() => props.setCurrentStep(steps[1])}
        >
          Start Questionnaire
        </button>
        <br />
        <button
          className="submitted"
          onClick={() => props.setCurrentStep(steps[7])}
        >
          Submitted Applications
        </button>
      </div>

      <img src={RocketManIcon} alt="Rocket Man" />
    </div>
  );
}
