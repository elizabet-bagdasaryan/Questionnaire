import React from "react";
import { steps } from "../../constants";

import "./Thanks.css";

export default function Thanks(props) {
  setTimeout(() => {
    props.setCurrentStep(steps[0]);
  }, 3000);

  return (
    <div className="thanks">
      <h1>Thanks for Joining 😊</h1>
    </div>
  );
}
