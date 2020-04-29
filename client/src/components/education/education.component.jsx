import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectEducation } from "../../redux/education/education.selectors";

import {
  EducationContainer,
  TitleContainer,
  TitleHeader,
  BulletContainer,
} from "./education.styles.jsx";
import { selectHiddenOrVisible } from "../../redux/lights/lights.selectors";

const Education = ({ education, hiddenOrVisible }) => (
  <EducationContainer hiddenOrVisible={hiddenOrVisible}>
    {education.map((edu) => (
      <TitleContainer hiddenOrVisible={hiddenOrVisible} key={edu.id}>
        <TitleHeader>
          <span>{edu.years}</span>
          <span>
            {edu.title}, {edu.school}
          </span>
        </TitleHeader>
        <div className="title-content">
          <ul>
            {edu.bullets.map((bullet) => (
              <BulletContainer key={bullet}>{bullet}</BulletContainer>
            ))}
          </ul>
        </div>
      </TitleContainer>
    ))}
  </EducationContainer>
);

const mapStateToProps = createStructuredSelector({
  education: selectEducation,
  hiddenOrVisible: selectHiddenOrVisible,
});

export default connect(mapStateToProps)(Education);
