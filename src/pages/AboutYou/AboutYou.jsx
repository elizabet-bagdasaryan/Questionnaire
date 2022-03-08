import React, { useState } from "react";

import StepButtons from "../../components/StepButtons/StepButtons";
import { steps } from "../../constants";

export default function AboutYou(props) {
  const [willOrganizeDevTalk, setWillOrganizeDevTalk] = useState(
    typeof props.data.will_organize_devtalk === "boolean"
      ? props.data.will_organize_devtalk
      : ""
  );
  const [willOrganizeDevTalkError, setWillOrganizeDevTalkError] =
    useState(null);

  const [devTalkTopic, setDevTalkTopic] = useState(
    props.data.devtalk_topic || ""
  );
  const [devTalkTopicError, setDevTalkTopicError] = useState(null);

  const [somethingSpecial, setSomethingSpecial] = useState(
    props.data.something_special || ""
  );
  const [somethingSpecialError, setSomethingSpecialError] = useState(null);

  const onStepChange = (step) => {
    let isValid = true;

    if (willOrganizeDevTalk === "") {
      setWillOrganizeDevTalkError(true);
      isValid = false;
    } else {
      setWillOrganizeDevTalkError(false);

      if (willOrganizeDevTalk && !devTalkTopic) {
        setDevTalkTopicError(true);
        isValid = false;
      }
    }

    if (!somethingSpecial) {
      setSomethingSpecialError(true);
      isValid = false;
    } else {
      setSomethingSpecialError(false);
    }

    if (isValid) {
      props.handleStepChange(
        {
          will_organize_devtalk: willOrganizeDevTalk,
          devtalk_topic: devTalkTopic,
          something_special: somethingSpecial,
        },
        steps[step]
      );
    } else {
      if (step === 3) {
        props.setCurrentStep(steps[3]);
      }
    }
  };

  return (
    <div className="main">
      <div className="left">
        <h1 className="page-title">What about you?</h1>

        <div className="form-container">
          <div className="radio-button-wrapper">
            <p className="question">
              Would you attend Devtalks and maybe also organize your own?
            </p>

            <div>
              <input
                type="radio"
                id="will_organize_devtalk_yes"
                checked={willOrganizeDevTalk}
                onChange={() => setWillOrganizeDevTalk(true)}
              />
              <label htmlFor="will_organize_devtalk_yes">Yes</label>
            </div>

            <div>
              <input
                type="radio"
                id="will_organize_devtalk_no"
                checked={willOrganizeDevTalk === false}
                onChange={() => setWillOrganizeDevTalk(false)}
              />
              <label htmlFor="will_organize_devtalk_no">No</label>
            </div>
            {willOrganizeDevTalkError && (
              <span className="error">Required</span>
            )}
          </div>

          {willOrganizeDevTalk && (
            <div className="radio-button-wrapper">
              <p className="question">What would you speak about at Devtalk?</p>

              <textarea
                className={devTalkTopicError ? "error" : ""}
                placeholder="I would..."
                value={devTalkTopic}
                onChange={(e) => setDevTalkTopic(e.target.value)}
              />

              {devTalkTopicError && <span className="error">Required</span>}
            </div>
          )}

          <div className="radio-button-wrapper">
            <p className="question">Tell us something special</p>

            <textarea
              className={somethingSpecialError ? "error" : ""}
              placeholder="I..."
              value={somethingSpecial}
              onChange={(e) => setSomethingSpecial(e.target.value)}
            />

            {somethingSpecialError && <span className="error">Required</span>}
          </div>

          <StepButtons
            step={steps[4]}
            onPrev={() => onStepChange(3)}
            onNext={() => onStepChange(5)}
          />
        </div>
      </div>
      <div className="right">
        <h1 className="page-title">Redberrian Insights</h1>
        <p>
          We were soo much fun before the pandemic started! Parties almost every
          weekend and lavish employee birthday celebrations! Unfortunately,
          covid ruined that fun like it did almost everything else in the world.
          But we try our best to zhuzh it up a bit. For example, we host
          biweekly Devtalks where our senior and lead developers talk about
          topics they are passionate about. Previous topics have included Web3,
          NFT, Laravel 9, Kubernetes, etc. We hold these talks in the office but
          you can join our Zoom broadcast as well. Feel free to join either as
          an attendee or a speaker!
        </p>
      </div>
    </div>
  );
}
