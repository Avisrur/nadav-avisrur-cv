import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  BottomLeftFlashLight,
  LowerFlashLightPart,
  BottomRightFlashLight,
  TopLeftFlashLight,
  TopRightFlashLight,
  UpperFlashLightPart,
  Light,
} from "./lights.styles.jsx";
import { selectHiddenOrVisible } from "../../redux/lights/lights.selectors.js";

const Lights = ({ hiddenOrVisible }) => (
  <div>
    <TopLeftFlashLight>
      <UpperFlashLightPart />
      <LowerFlashLightPart />
      <Light hiddenOrVisible={hiddenOrVisible} />
    </TopLeftFlashLight>
    <TopRightFlashLight>
      <UpperFlashLightPart />
      <LowerFlashLightPart />
      <Light hiddenOrVisible={hiddenOrVisible} />
    </TopRightFlashLight>
    <BottomLeftFlashLight>
      <UpperFlashLightPart />
      <LowerFlashLightPart />
      <Light hiddenOrVisible={hiddenOrVisible} />
    </BottomLeftFlashLight>
    <BottomRightFlashLight>
      <UpperFlashLightPart />
      <LowerFlashLightPart />
      <Light hiddenOrVisible={hiddenOrVisible} />
    </BottomRightFlashLight>
  </div>
);

const mapStateToProps = createStructuredSelector({
  hiddenOrVisible: selectHiddenOrVisible,
});

export default connect(mapStateToProps)(Lights);
