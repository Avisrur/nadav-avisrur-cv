import React from "react";

import Profile from "../profile/profile.component";
import Summary from "../summary/summary.component";
import Skills from "../skills/skills.component";
import Lights from "../lights/lights.component";
import LightButton from "../light-button/light-button.component";
import Tabs from "../tabs/tabs.component";

import { CvContainer } from "./cv.styles.jsx";

const Cv = () => (
  <div>
    <LightButton />
    <CvContainer>
      <Lights />
      <Profile />
      <Summary />
      <Skills />
      <Tabs />
    </CvContainer>
  </div>
);

export default Cv;
