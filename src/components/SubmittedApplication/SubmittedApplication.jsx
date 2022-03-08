import React, { useState } from "react";

import "./SubmittedApplication.css";

import ArrowUp from "../../img/ArrowUp.svg";
import ArrowDown from "../../img/ArrowDown.svg";

export default function SubmittedApplication({ application, index, skills }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="submitted-application">
      <div className="expand" onClick={() => setExpanded((prev) => !prev)}>
        <h1>{index + 1}</h1>

        <img src={expanded ? ArrowUp : ArrowDown} alt="Arrow" />
      </div>

      {expanded && (
        <div className="content">
          <div>
            <div className="column">
              <h1 className="column-title">Personal Information</h1>

              <div className="row">
                <p className="key">First Name</p>
                <p className="value">{application.first_name}</p>
              </div>

              <div className="row">
                <p className="key">Last Name</p>
                <p className="value">{application.last_name}</p>
              </div>

              <div className="row">
                <p className="key">E Mail</p>
                <p className="value">{application.email}</p>
              </div>

              <div className="row">
                <p className="key">Phone</p>
                <p className="value">{application.phone}</p>
              </div>
            </div>

            <div className="column">
              <h1 className="column-title">Skillset</h1>

              {application.skills.map((skill) => (
                <div className="row" key={skill.id}>
                  <p className="key">
                    {skills.find((item) => item.id === skill.id)?.title || "_"}
                  </p>
                  <p className="value">
                    Years of Experience: {skill.experience}
                  </p>
                </div>
              ))}
            </div>

            <div className="column">
              <h1 className="column-title">Covid Situation</h1>

              <div className="radio-button-wrapper">
                <p className="question">How would you prefer to work?</p>

                <div>
                  <input
                    type="radio"
                    id="office"
                    checked={application.work_preference === "from_office"}
                  />
                  <label htmlFor="office">From Sairme Office</label>
                </div>

                <div>
                  <input
                    type="radio"
                    id="home"
                    checked={application.work_preference === "from_home"}
                  />
                  <label htmlFor="home">From Home</label>
                </div>

                <div>
                  <input
                    type="radio"
                    id="hybrid"
                    checked={application.work_preference === "hybrid"}
                  />
                  <label htmlFor="hybrid">Hybrid</label>
                </div>
              </div>

              <div className="radio-button-wrapper">
                <p className="question">Did you contact covid 19? :(</p>

                <div>
                  <input
                    type="radio"
                    id="covid_yes"
                    checked={application.had_covid}
                  />
                  <label htmlFor="covid_yes">Yes</label>
                </div>

                <div>
                  <input
                    type="radio"
                    id="covid_no"
                    checked={!application.had_covid}
                  />
                  <label htmlFor="covid_no">No</label>
                </div>
              </div>

              {application.had_covid && (
                <div className="radio-button-wrapper">
                  <p className="question">When?</p>

                  <input
                    type="date"
                    placeholder="Date"
                    value={application.had_covid_at}
                  />
                </div>
              )}

              <div className="radio-button-wrapper">
                <p className="question">Have you been vaccinated?</p>

                <div>
                  <input
                    type="radio"
                    id="vaccine_yes"
                    checked={application.vaccinated}
                  />
                  <label htmlFor="vaccine_yes">Yes</label>
                </div>

                <div>
                  <input
                    type="radio"
                    id="vaccine_no"
                    checked={!application.vaccinated}
                  />
                  <label htmlFor="vaccine_no">No</label>
                </div>
              </div>

              {application.vaccinated && (
                <div className="radio-button-wrapper">
                  <p className="question">
                    When did you get your last covid vaccine?
                  </p>

                  <input
                    type="date"
                    placeholder="Date"
                    value={application.vaccinated_at}
                  />
                </div>
              )}
            </div>

            <div className="column">
              <h1 className="column-title">Insigts</h1>

              <div className="radio-button-wrapper">
                <p className="question">
                  Would you attend Devtalks and maybe also organize your own?
                </p>

                <div>
                  <input
                    type="radio"
                    id="will_organize_devtalk_yes"
                    checked={application.will_organize_devtalk}
                  />
                  <label htmlFor="will_organize_devtalk_yes">Yes</label>
                </div>

                <div>
                  <input
                    type="radio"
                    id="will_organize_devtalk_no"
                    checked={!application.will_organize_devtalk}
                  />
                  <label htmlFor="will_organize_devtalk_no">No</label>
                </div>
              </div>

              {application.will_organize_devtalk && (
                <div className="radio-button-wrapper">
                  <p className="question">
                    What would you speak about at Devtalk?
                  </p>

                  <textarea
                    placeholder="I would..."
                    value={application.devtalk_topic}
                    disabled
                  />
                </div>
              )}

              <div className="radio-button-wrapper">
                <p className="question">Tell us something special</p>

                <textarea
                  placeholder="I..."
                  value={application.something_special}
                  disabled
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
