import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectSkills } from "../../redux/profile/profile.selectors";

import { SkillsContainer, SkillsSpan } from "./skills.styles.jsx";
import { selectHiddenOrVisible } from "../../redux/lights/lights.selectors";

const Skills = ({ skills, hiddenOrVisible }) => (
  <SkillsContainer hiddenOrVisible={hiddenOrVisible}>
    {skills.map((skill) => (
      <SkillsSpan hiddenOrVisible={hiddenOrVisible} key={skill.id}>
        {skill.skill}{" "}
      </SkillsSpan>
    ))}
  </SkillsContainer>
);

const mapStateToProps = createStructuredSelector({
  skills: selectSkills,
  hiddenOrVisible: selectHiddenOrVisible,
});

export default connect(mapStateToProps)(Skills);
