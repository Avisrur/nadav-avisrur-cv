import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectMilitary } from "../../redux/military/military.selectors";

import {
  TabContentContainer,
  TitleContainer,
  TitleHeader,
  BulletContainer,
} from "../../styles/general.styles.jsx";
import { selectHiddenOrVisible } from "../../redux/lights/lights.selectors";

const Military = ({ military, hiddenOrVisible }) => (
  <TabContentContainer hiddenOrVisible={hiddenOrVisible}>
    <TitleContainer hiddenOrVisible={hiddenOrVisible}>
      <TitleHeader>
        <span>{military.years} </span>
        <span>
          {military.title}, {military.unit}
        </span>
      </TitleHeader>
      <div className="job-content">
        <ul>
          {military.bullets.map((bullet) => (
            <BulletContainer key={bullet}>{bullet}</BulletContainer>
          ))}
        </ul>
      </div>
    </TitleContainer>
  </TabContentContainer>
);

const mapStateToProps = createStructuredSelector({
  military: selectMilitary,
  hiddenOrVisible: selectHiddenOrVisible,
});

export default connect(mapStateToProps)(Military);
