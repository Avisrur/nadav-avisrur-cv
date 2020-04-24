import React from "react";

import Header from "../profile/profile.component";
import Summary from "../summary/summary.component";
import Skills from "../skills/skills.component";
import Experience from "../experience/experience.component";
import Education from "../education/education.component";
import Lights from "../lights/lights.component";

import "./cv-lights-off.styles.scss";

const CvLightsOff = () => (
  <div className="container">
    <Lights />
    <Header />
    <Summary />
    <Skills />
    <Experience />
    <Education />
  </div>
);

export default CvLightsOff;
