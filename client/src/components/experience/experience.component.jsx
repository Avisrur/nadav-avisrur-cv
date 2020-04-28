import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectExperience } from "../../redux/experience/experience.selectors";

import { ExperienceContainer } from "./experience.styles.jsx";
import { selectHiddenOrVisible } from "../../redux/lights/lights.selectors";

const Experience = ({ experience, hiddenOrVisible }) => (
  <ExperienceContainer hiddenOrVisible={hiddenOrVisible}></ExperienceContainer>
  // {experience.map((job) => (
  //   <JobContainer hiddenOrVisible={hiddenOrVisible} key={job.id}>
  //     <div className="job-header">
  //       <span>{job.years}</span>
  //       <span>
  //         {job.title},{job.companyName}
  //       </span>
  //       <span>{job.city}</span>
  //     </div>
  //     <div className="job-content">
  //       <ul>
  //         {job.bullets.map((bullet) => (
  //           <li key={bullet}>{bullet}</li>
  //         ))}
  //       </ul>
  //     </div>
  //   </JobContainer>
  // ))}
);

const mapStateToProps = createStructuredSelector({
  experience: selectExperience,
  hiddenOrVisible: selectHiddenOrVisible,
});

export default connect(mapStateToProps)(Experience);
