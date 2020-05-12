import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectHiddenOrVisible } from "../../redux/lights/lights.selectors";
import { setLights } from "../../redux/lights/lights.actions";

import "./light-button.styles.scss";

const LightButton = ({ hiddenOrVisible, setLights }) => {
  const handleChangeChk = () => {
    hiddenOrVisible === "hidden" || hiddenOrVisible === "start"
      ? setLights("visible")
      : setLights("hidden");
  };

  return (
    <div className="wrapper">
      <div className="toggle">
        <input
          className="toggle-input"
          type="checkbox"
          defaultChecked
          onChange={handleChangeChk}
        />
        <div className="toggle-bg"></div>
        <div className="toggle-switch">
          <div className="toggle-switch-figureAlt"></div>
          <div className="toggle-switch-figure"></div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToState = (dispatch) => ({
  setLights: (hiddenOrVisible) => dispatch(setLights(hiddenOrVisible)),
});

const mapStateToProps = createStructuredSelector({
  hiddenOrVisible: selectHiddenOrVisible,
});

export default connect(mapStateToProps, mapDispatchToState)(LightButton);
