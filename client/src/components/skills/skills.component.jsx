import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectSkills } from "../../redux/profile/profile.selectors";

import { SkillsContainer, IconContainer } from "./skills.styles.jsx";
import { selectHiddenOrVisible } from "../../redux/lights/lights.selectors";
//
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Skills = ({ skills, hiddenOrVisible }) => (
  <SkillsContainer hiddenOrVisible={hiddenOrVisible}>
    {skills.map((skill) => (
      <IconContainer key={skill.id} hiddenOrVisible={hiddenOrVisible}>
        <FontAwesomeIcon icon={skill.icon} size="3x" />
        <span>{skill.skill}</span>
      </IconContainer>
    ))}
  </SkillsContainer>
);

const mapStateToProps = createStructuredSelector({
  skills: selectSkills,
  hiddenOrVisible: selectHiddenOrVisible,
});

export default connect(mapStateToProps)(Skills);
