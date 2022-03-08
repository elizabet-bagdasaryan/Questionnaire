import React, { useState } from "react";

import { steps } from "../../constants";
import StepButtons from "../../components/StepButtons/StepButtons";

import "./Covid.css";

export default function Covid(props) {
  const [workPreference, setWorkPreference] = useState(
    props.data.work_preference || ""
  );
  const [workPreferenceError, setWorkPreferenceError] = useState(null);

  const [hadCovid, setHadCovid] = useState(
    typeof props.data.had_covid === "boolean" ? props.data.had_covid : ""
  );
  const [hadCovidError, setHadCovidError] = useState(null);

  const [hadCovidAt, setHadCovidAt] = useState(props.data.had_covid_at || "");
  const [hadCovidAtError, setHadCovidAtError] = useState(null);

  const [vaccinated, setVaccinated] = useState(
    typeof props.data.vaccinated === "boolean" ? props.data.vaccinated : ""
  );
  const [vaccinatedError, setVaccinatedError] = useState(null);

  const [vaccinatedAt, setVaccinatedAt] = useState(
    props.data.vaccinated_at || ""
  );
  const [vaccinatedAtError, setVaccinatedAtError] = useState(null);

  const onStepChange = (step) => {
    let isValid = true;

    if (!workPreference) {
      setWorkPreferenceError(true);
      isValid = false;
    } else {
      setWorkPreferenceError(false);
    }

    if (hadCovid === "") {
      setHadCovidError(true);
      isValid = false;
    } else {
      setHadCovidError(false);

      if (hadCovid && !hadCovidAt) {
        setHadCovidAtError(true);
        isValid = false;
      } else {
        setHadCovidAtError(false);
      }
    }

    if (vaccinated === "") {
      setVaccinatedError(true);
      isValid = false;
    } else {
      setVaccinatedError(false);
      if (vaccinated && !vaccinatedAt) {
        setVaccinatedAtError(true);
        isValid = false;
      } else {
        setVaccinatedAtError(false);
      }
    }

    if (isValid) {
      props.handleStepChange(
        {
          work_preference: workPreference,
          had_covid: hadCovid,
          had_covid_at: hadCovidAt,
          vaccinated: vaccinated,
          vaccinated_at: vaccinatedAt,
        },
        steps[step]
      );
    } else {
      if (step === 2) {
        props.setCurrentStep(steps[2]);
      }
    }
  };

  return (
    <div className="main">
      <div className="left">
        <h1 className="page-title">Covid Stuff</h1>

        <div className="form-container">
          <div className="radio-button-wrapper">
            <p className="question">How would you prefer to work?</p>

            <div>
              <input
                type="radio"
                id="office"
                checked={workPreference === "from_office"}
                onChange={() => setWorkPreference("from_office")}
              />
              <label htmlFor="office">From Sairme Office</label>
            </div>

            <div>
              <input
                type="radio"
                id="home"
                checked={workPreference === "from_home"}
                onChange={() => setWorkPreference("from_home")}
              />
              <label htmlFor="home">From Home</label>
            </div>

            <div>
              <input
                type="radio"
                id="hybrid"
                checked={workPreference === "hybrid"}
                onChange={() => setWorkPreference("hybrid")}
              />
              <label htmlFor="hybrid">Hybrid</label>
            </div>

            {workPreferenceError && <span className="error">Required</span>}
          </div>

          <div className="radio-button-wrapper">
            <p className="question">Did you contact covid 19? :(</p>

            <div>
              <input
                type="radio"
                id="covid_yes"
                checked={hadCovid}
                onChange={() => setHadCovid(true)}
              />
              <label htmlFor="covid_yes">Yes</label>
            </div>

            <div>
              <input
                type="radio"
                id="covid_no"
                checked={hadCovid === false}
                onChange={() => setHadCovid(false)}
              />
              <label htmlFor="covid_no">No</label>
            </div>
            {hadCovidError && <span className="error">Required</span>}
          </div>

          {hadCovid && (
            <div className="radio-button-wrapper">
              <p className="question">When?</p>

              <input
                className={hadCovidAtError ? "error" : ""}
                type="date"
                placeholder="Date"
                value={hadCovidAt}
                onChange={(e) => setHadCovidAt(e.target.value)}
              />

              {hadCovidAtError && <span className="error">Required</span>}
            </div>
          )}

          <div className="radio-button-wrapper">
            <p className="question">Have you been vaccinated?</p>

            <div>
              <input
                type="radio"
                id="vaccine_yes"
                checked={vaccinated}
                onChange={() => setVaccinated(true)}
              />
              <label htmlFor="vaccine_yes">Yes</label>
            </div>

            <div>
              <input
                type="radio"
                id="vaccine_no"
                checked={vaccinated === false}
                onChange={() => setVaccinated(false)}
              />
              <label htmlFor="vaccine_no">No</label>
            </div>

            {vaccinatedError && <span className="error">Required</span>}
          </div>

          {vaccinated && (
            <div className="radio-button-wrapper">
              <p className="question">
                When did you get your last covid vaccine?
              </p>

              <input
                className={vaccinatedAtError ? "error" : ""}
                type="date"
                placeholder="Date"
                value={vaccinatedAt}
                onChange={(e) => setVaccinatedAt(e.target.value)}
              />

              {vaccinatedAtError && <span className="error">Required</span>}
            </div>
          )}

          <StepButtons
            step={steps[3]}
            onPrev={() => onStepChange(2)}
            onNext={() => onStepChange(4)}
          />
        </div>
      </div>
      <div className="right">
        <h1 className="page-title">Redberry Covid Policies</h1>
        <p>
          As this infamous pandemic took over the world, we adjusted our working
          practices so that our employees can be as safe and comfortable as
          possible. We have a hybrid work environment, so you can either work
          from home or visit our lovely office on Sairme Street. If it was up to
          us, we would love you to see us in the office because we think
          face-to-face communications {">"} Zoom meetings. Both on the fun and
          productivity scales.
        </p>
      </div>
    </div>
  );
}
