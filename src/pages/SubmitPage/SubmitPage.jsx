import React from "react";
import "./SubmitPage.css";

import { steps, token } from "../../constants";

export default function SubmitPage(props) {
  const onSubmit = () => {
    const data = {
      ...props.data,
      token: token,
    };

    if (!data.had_covid_at) {
      delete data.had_covid_at;
    }

    if (!data.vaccinated_at) {
      delete data.vaccinated_at;
    }

    if (!data.devtalk_topic) {
      delete data.devtalk_topic;
    }

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify(data),
    };

    fetch("https://bootcamp-2022.devtest.ge/api/application", requestOptions)
      .then(() => {
        props.setData({});
        props.setCurrentStep(steps[6]);
      })
      .catch((error) => alert(error));
  };

  return (
    <div className="submit-page">
      <button className="submit" onClick={onSubmit}>
        Submit
      </button>

      <button
        className="go-back"
        onClick={() => props.setCurrentStep(steps[4])}
      >
        go back
      </button>
    </div>
  );
}
