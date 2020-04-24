import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectEducation } from "../../redux/education/education.selectors";

import "./education.styles.scss";

const Education = ({ education }) => (
  <div className="education-container">
    {education.map((edu) => (
      <div className="edu-container" key={edu.id}>
        <div className="education-header"></div>
        <span>{edu.years}</span>
        <span>
          {edu.title}, {edu.school}
        </span>
        <div className="education-content">
          <ul>
            {edu.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </div>
      </div>
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  education: selectEducation,
});

export default connect(mapStateToProps)(Education);
