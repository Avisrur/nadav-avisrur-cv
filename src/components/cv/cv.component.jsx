import React from "react";

import Header from "../profile/profile.component";
import Summary from "../summary/summary.component";
import Skills from "../skills/skills.component";
import Experience from "../experience/experience.component";
import Education from "../education/education.component";
import Lights from "../lights/lights.component";
import LightButton from "../light-button/light-button.component";

import { CvContainer } from "./cv.styles.jsx";

const Cv = () => (
  <div>
    <LightButton />
    <CvContainer>
      <Lights />
      <Header />
      <Summary />
      <Skills />
      <Experience />
      <Education />
    </CvContainer>
  </div>
);

export default Cv;
