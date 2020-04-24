import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectSkills } from "../../redux/profile/profile.selectors";

import { SkillsContainer, SkillsSpan } from "./skills.styles.jsx";

const Skills = ({ skills }) => (
  <SkillsContainer>
    {skills.map((skill) => (
      <SkillsSpan key={skill.id}>{skill.skill} </SkillsSpan>
    ))}
  </SkillsContainer>
);

const mapStateToProps = createStructuredSelector({
  skills: selectSkills,
});

export default connect(mapStateToProps)(Skills);
