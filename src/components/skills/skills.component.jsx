import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectSkills } from "../../redux/profile/profile.selectors";

import "./skills.styles.scss";

const Skills = ({ skills }) => (
  <div className="skills-container">
    {skills.map((skill) => (
      <span key={skill.id}>{skill.skill} </span>
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  skills: selectSkills,
});

export default connect(mapStateToProps)(Skills);
