import React, { useEffect, useState } from "react";

import "./TechnicalSkills.css";

import StepButtons from "../../components/StepButtons/StepButtons";
import { steps } from "../../constants";
import Skill from "../../components/Skill/Skill";

export default function TechnicalSkills(props) {
  const [skills, setSkills] = useState([]);

  const [selectedSkill, setSelectedSkill] = useState("placeholder");
  const [selectedSkillError, setSelectedSkillError] = useState(false);

  const [experience, setExperience] = useState("");
  const [experienceError, setExperienceError] = useState(false);

  const [selectedSkills, setSelectedSkills] = useState(props.data.skills || []);

  useEffect(() => {
    fetch("https://bootcamp-2022.devtest.ge/api/skills")
      .then((res) => res.json())
      .then((data) => setSkills(data));
  }, []);

  const onSkillAdd = () => {
    let isValid = true;

    if (selectedSkill === "placeholder") {
      setSelectedSkillError(true);
      isValid = false;
    } else {
      setSelectedSkillError(false);
    }

    if (!experience || experience < 0) {
      setExperienceError(true);
      isValid = false;
    } else {
      setExperienceError(false);
    }

    if (isValid) {
      setSelectedSkills([...selectedSkills, { id: selectedSkill, experience }]);
      setSelectedSkill("placeholder");
      setExperience("");
    }
  };

  const filteredSkills = skills.filter(
    (skill) => !selectedSkills.find((item) => item.id === skill.id)
  );

  const onStepChange = (step) => {
    if (selectedSkills.length > 0) {
      props.handleStepChange(
        {
          skills: selectedSkills,
        },
        steps[step]
      );
    } else {
      if (step === 1) {
        props.setCurrentStep(steps[1]);
      } else {
        alert("Please add at least one skill");
      }
    }
  };

  const handleSkillDelete = (id) => {
    setSelectedSkills(selectedSkills.filter((skill) => skill.id !== id));
  };

  return (
    <div className="main">
      <div className="left">
        <h1 className="page-title">Tell us about your skills</h1>

        <div className="form-container">
          <div>
            <select
              className={
                selectedSkillError ? "skills-select error" : "skills-select"
              }
              value={selectedSkill}
              onChange={(e) => setSelectedSkill(Number(e.target.value))}
            >
              <option value="placeholder">Skills</option>
              {filteredSkills.map((skill) => (
                <option key={skill.id} value={skill.id}>
                  {skill.title}
                </option>
              ))}
            </select>
            {selectedSkillError && <span className="error">Required</span>}
          </div>

          <div>
            <input
              className={experienceError ? "error" : ""}
              placeholder="Experience Duration in Years"
              type="number"
              value={experience}
              onChange={(e) => setExperience(Number(e.target.value))}
              min={0}
            />

            {experienceError && (
              <span className="error">Required, Must be positive number</span>
            )}
          </div>

          <div className="add-skill-button-wrapper">
            <button className="add-skill-button" onClick={onSkillAdd}>
              Add Programming Language
            </button>
          </div>

          {selectedSkills.map((skill) => (
            <Skill
              key={skill.id}
              skill={skill}
              skills={skills}
              onSkillDelete={handleSkillDelete}
            />
          ))}

          <StepButtons
            step={steps[2]}
            onPrev={() => onStepChange(1)}
            onNext={() => onStepChange(3)}
          />
        </div>
      </div>
      <div className="right">
        <h1 className="page-title">A bit about our battles</h1>
        <p>
          As we said, Redberry has been on the field for quite some time now,
          and we have touched and embraced a variety of programming languages,
          technologies, philosophies, and frameworks. We are battle-tested in
          PHP Laravel Stack with Vue.js, refined in React, and allies with
          Serverside technologies like Docker and Kubernetes, and now we have
          set foot in the web3 industry.
        </p>
      </div>
    </div>
  );
}
