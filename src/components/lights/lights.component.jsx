import React from "react";

import {
  BottomLeftFlashLight,
  LowerFlashLightPart,
  BottomRightFlashLight,
  TopLeftFlashLight,
  TopRightFlashLight,
  UpperFlashLightPart,
  Light,
} from "./lights.styles.jsx";

const Lights = () => (
  <div>
    <TopLeftFlashLight>
      <UpperFlashLightPart />
      <LowerFlashLightPart />
      <Light />
    </TopLeftFlashLight>
    <TopRightFlashLight>
      <UpperFlashLightPart />
      <LowerFlashLightPart />
      <Light />
    </TopRightFlashLight>
    <BottomLeftFlashLight>
      <UpperFlashLightPart />
      <LowerFlashLightPart />
      <Light />
    </BottomLeftFlashLight>
    <BottomRightFlashLight>
      <UpperFlashLightPart />
      <LowerFlashLightPart />
      <Light />
    </BottomRightFlashLight>
  </div>
);

export default Lights;
