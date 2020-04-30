import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectExperience } from "../../redux/experience/experience.selectors";

import {
  TabContentContainer,
  TitleContainer,
  TitleHeader,
  BulletContainer,
} from "../../styles/general.styles.jsx";
import { selectHiddenOrVisible } from "../../redux/lights/lights.selectors";

const Experience = ({ experience, hiddenOrVisible }) => (
  <TabContentContainer hiddenOrVisible={hiddenOrVisible}>
    {experience.map((job) => (
      <TitleContainer hiddenOrVisible={hiddenOrVisible} key={job.id}>
        <TitleHeader>
          <span>{job.years} </span>
          <span>
            {job.title}, {job.companyName}
          </span>
          <span> {job.city}</span>
        </TitleHeader>
        <div className="job-content">
          <ul>
            {job.bullets.map((bullet) => (
              <BulletContainer key={bullet}>{bullet}</BulletContainer>
            ))}
          </ul>
        </div>
      </TitleContainer>
    ))}
  </TabContentContainer>
);

const mapStateToProps = createStructuredSelector({
  experience: selectExperience,
  hiddenOrVisible: selectHiddenOrVisible,
});

export default connect(mapStateToProps)(Experience);
