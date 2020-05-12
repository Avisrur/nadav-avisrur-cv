import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  LowerFlashLightPart,
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
      {hiddenOrVisible === "visible" ? (
        <Light hiddenOrVisible={hiddenOrVisible} />
      ) : (
        <Light hiddenOrVisible={hiddenOrVisible} />
      )}
    </TopLeftFlashLight>
    <TopRightFlashLight>
      <UpperFlashLightPart />
      <LowerFlashLightPart />
      {hiddenOrVisible === "visible" ? (
        <Light hiddenOrVisible={hiddenOrVisible} />
      ) : (
        <Light hiddenOrVisible={hiddenOrVisible} />
      )}
    </TopRightFlashLight>
  </div>
);

const mapStateToProps = createStructuredSelector({
  hiddenOrVisible: selectHiddenOrVisible,
});

export default connect(mapStateToProps)(Lights);
