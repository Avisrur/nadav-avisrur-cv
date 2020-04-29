import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectMilitary } from "../../redux/military/military.selectors";

import {
  MilitaryContainer,
  JobContainer,
  JobHeader,
  BulletContainer,
} from "./military.styles.jsx";
import { selectHiddenOrVisible } from "../../redux/lights/lights.selectors";

const Military = ({ military, hiddenOrVisible }) => (
  <MilitaryContainer hiddenOrVisible={hiddenOrVisible}>
    <JobContainer hiddenOrVisible={hiddenOrVisible}>
      <JobHeader>
        <span>{military.years} </span>
        <span>
          {military.title}, {military.unit}
        </span>
      </JobHeader>
      <div className="job-content">
        <ul>
          {military.bullets.map((bullet) => (
            <BulletContainer key={bullet}>{bullet}</BulletContainer>
          ))}
        </ul>
      </div>
    </JobContainer>
  </MilitaryContainer>
);

const mapStateToProps = createStructuredSelector({
  military: selectMilitary,
  hiddenOrVisible: selectHiddenOrVisible,
});

export default connect(mapStateToProps)(Military);
