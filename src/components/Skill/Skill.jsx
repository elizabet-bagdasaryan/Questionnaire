import React from "react";

import "./Skill.css";

import RemoveIcon from "../../img/Remove.svg";

export default function Skill({ skills, skill, onSkillDelete }) {
  return (
    <div className="skill">
      <p>{skills.find((item) => item.id === skill.id)?.title}</p>

      <p>Years of Experience: {skill.experience}</p>

      <button onClick={() => onSkillDelete(skill.id)}>
        <img src={RemoveIcon} alt="Remove icon" />
      </button>
    </div>
  );
}
