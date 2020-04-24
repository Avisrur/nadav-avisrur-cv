import React from "react";

import "./light-button.styles.scss";

const LightButton = () => (
  <div class="wrapper">
    <div class="toggle">
      <input class="toggle-input" type="checkbox" />
      <div class="toggle-bg"></div>
      <div class="toggle-switch">
        <div class="toggle-switch-figure"></div>
        <div class="toggle-switch-figureAlt"></div>
      </div>
    </div>
  </div>
);

export default LightButton;
