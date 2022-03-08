import React, { useEffect, useState } from "react";

import "./SubmittedApplications.css";

import { steps, token } from "../../constants";
import SubmittedApplication from "../../components/SubmittedApplication/SubmittedApplication";

export default function SubmittedApplications(props) {
  const [submittedApplications, setSubmittedApplications] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch(`https://bootcamp-2022.devtest.ge/api/applications?token=${token}`)
      .then((res) => res.json())
      .then((data) => setSubmittedApplications(data));

    fetch("https://bootcamp-2022.devtest.ge/api/skills")
      .then((res) => res.json())
      .then((data) => setSkills(data));
  }, []);

  return (
    <div className="submitted-applications">
      <div>
        <div className="header">
          <h1 className="page-title">Submitted Applications</h1>
          <button
            className="go-back"
            onClick={() => props.setCurrentStep(steps[0])}
          >
            Go back
          </button>
        </div>

        {submittedApplications.map((application, index) => (
          <SubmittedApplication
            key={index}
            index={index}
            skills={skills}
            application={application}
          />
        ))}
      </div>
    </div>
  );
}
