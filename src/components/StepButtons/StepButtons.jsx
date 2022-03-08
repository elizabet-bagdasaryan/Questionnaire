import React from "react";

import "./StepButtons.css";

import { steps } from "../../constants";

import PrevIcon from "../../img/Previous.svg";
import NextIcon from "../../img/Next.svg";

export default function StepButtons({ step, onPrev, onNext }) {
  const pageSteps = steps.slice(1, 6);
  const stepIndex = pageSteps.indexOf(step);

  return (
    <div className="step-buttons">
      <button onClick={onPrev} disabled={!onPrev}>
        <img src={PrevIcon} alt="Prev icon" />
      </button>

      {pageSteps.map((step, index) => (
        <div
          key={step}
          className={`step ${index <= stepIndex ? "active" : ""}`}
        />
      ))}

      <button onClick={onNext}>
        <img src={NextIcon} alt="Next icon" />
      </button>
    </div>
  );
}
