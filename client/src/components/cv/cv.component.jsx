import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectHiddenOrVisible } from "../../redux/lights/lights.selectors";

import Profile from "../profile/profile.component";
import Summary from "../summary/summary.component";
import Skills from "../skills/skills.component";
import Lights from "../lights/lights.component";
import LightButton from "../light-button/light-button.component";
import Tabs from "../tabs/tabs.component";

import { CvContainer, TextContainer } from "./cv.styles.jsx";

const Cv = ({ hiddenOrVisible }) => (
  <div>
    <LightButton />
    <TextContainer hiddenOrVisible={hiddenOrVisible}>
      Turn On The Light
    </TextContainer>
    <CvContainer>
      <Lights />
      <Profile />
      <Summary />
      <Skills />
      <Tabs />
    </CvContainer>
  </div>
);

const mapStateToProps = createStructuredSelector({
  hiddenOrVisible: selectHiddenOrVisible,
});

export default connect(mapStateToProps)(Cv);
