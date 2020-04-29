import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectExperience } from "../../redux/experience/experience.selectors";

import {
  ExperienceContainer,
  JobContainer,
  BulletContainer,
  JobHeader,
} from "./experience.styles.jsx";
import { selectHiddenOrVisible } from "../../redux/lights/lights.selectors";

const Experience = ({ experience, hiddenOrVisible }) => (
  <ExperienceContainer hiddenOrVisible={hiddenOrVisible}>
    {experience.map((job) => (
      <JobContainer hiddenOrVisible={hiddenOrVisible} key={job.id}>
        <JobHeader>
          <span>{job.years} </span>
          <span>
            {job.title}, {job.companyName}
          </span>
          <span> {job.city}</span>
        </JobHeader>
        <div className="job-content">
          <ul>
            {job.bullets.map((bullet) => (
              <BulletContainer key={bullet}>{bullet}</BulletContainer>
            ))}
          </ul>
        </div>
      </JobContainer>
    ))}
  </ExperienceContainer>
);

const mapStateToProps = createStructuredSelector({
  experience: selectExperience,
  hiddenOrVisible: selectHiddenOrVisible,
});

export default connect(mapStateToProps)(Experience);
