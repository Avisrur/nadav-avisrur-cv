import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./experience.styles.scss";
import { selectExperience } from "../../redux/experience/experience.selectors";

const Experience = ({ experience }) => (
  <div className="experience-container">
    {experience.map((job) => (
      <div className="job-container" key={job.id}>
        <div className="job-header">
          <span>{job.years}</span>
          <span>
            {job.title},{job.companyName}
          </span>
          <span>{job.city}</span>
        </div>
        <div className="job-content">
          <ul>
            {job.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </div>
      </div>
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  experience: selectExperience,
});

export default connect(mapStateToProps)(Experience);
