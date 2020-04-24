import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectEducation } from "../../redux/education/education.selectors";

import { EducationContainer, TitleContainer } from "./education.styles.jsx";

const Education = ({ education }) => (
  <EducationContainer>
    {education.map((edu) => (
      <TitleContainer key={edu.id}>
        <div className="title-header"></div>
        <span>{edu.years}</span>
        <span>
          {edu.title}, {edu.school}
        </span>
        <div className="title-content">
          <ul>
            {edu.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </div>
      </TitleContainer>
    ))}
  </EducationContainer>
);

const mapStateToProps = createStructuredSelector({
  education: selectEducation,
});

export default connect(mapStateToProps)(Education);
