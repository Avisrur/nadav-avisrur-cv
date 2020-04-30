import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectEducation } from "../../redux/education/education.selectors";

import {
  TabContentContainer,
  TitleContainer,
  TitleHeader,
  BulletContainer,
} from "../../styles/general.styles.jsx";

import "../../styles/general.styles";
import { selectHiddenOrVisible } from "../../redux/lights/lights.selectors";

const Education = ({ education, hiddenOrVisible }) => (
  <TabContentContainer hiddenOrVisible={hiddenOrVisible} className="scrollable">
    {education.map((edu) => (
      <TitleContainer hiddenOrVisible={hiddenOrVisible} key={edu.id}>
        <TitleHeader>
          <span>{edu.years} </span>
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
  </TabContentContainer>
);

const mapStateToProps = createStructuredSelector({
  education: selectEducation,
  hiddenOrVisible: selectHiddenOrVisible,
});

export default connect(mapStateToProps)(Education);
