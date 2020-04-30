import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectSkills } from "../../redux/profile/profile.selectors";

import {
  SkillsContainer,
  IconContainer,
  SkillsContentContainer,
  SkillsSpan,
} from "./skills.styles.jsx";
import { selectHiddenOrVisible } from "../../redux/lights/lights.selectors";
//
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Skills = ({ skills, hiddenOrVisible }) => (
  <SkillsContainer hiddenOrVisible={hiddenOrVisible}>
    <SkillsContentContainer hiddenOrVisible={hiddenOrVisible}>
      {hiddenOrVisible === "visible" ? <SkillsSpan>Skills</SkillsSpan> : null}
      {skills.map((skill) =>
        hiddenOrVisible === "visible" ? (
          <IconContainer key={skill.id} duration={Math.random() * 5 + "s"}>
            <FontAwesomeIcon icon={skill.icon} size="2x" />
            <span>{skill.skill}</span>
          </IconContainer>
        ) : null
      )}
    </SkillsContentContainer>
  </SkillsContainer>
);

const mapStateToProps = createStructuredSelector({
  skills: selectSkills,
  hiddenOrVisible: selectHiddenOrVisible,
});

export default connect(mapStateToProps)(Skills);
