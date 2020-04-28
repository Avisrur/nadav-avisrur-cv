import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectHiddenOrVisible } from "../../redux/lights/lights.selectors";
import { selectActiveTabs } from "../../redux/tabs/tabs.selectors";

import {
  TabContainer,
  TabsList,
  TabContent,
  TabsVisibility,
} from "./tabs.styles";
import "./tab.styles.scss";
import { setActiveTab } from "../../redux/tabs/tabs.actions";

const Tabs = ({ hiddenOrVisible, activeTabs, setActiveTab }) => {
  function handleActiveTab(label) {
    setActiveTab([
      {
        label: "Experience",
        className: label === "Experience" ? "tab-button-active" : "tab-button",
      },
      {
        label: "Education",
        className: label === "Education" ? "tab-button-active" : "tab-button",
      },
      {
        label: "Military",
        className: label === "Military" ? "tab-button-active" : "tab-button",
      },
    ]);
  }

  return (
    <TabContainer hiddenOrVisible={hiddenOrVisible}>
      <TabsVisibility hiddenOrVisible={hiddenOrVisible}>
        <TabsList hiddenOrVisible={hiddenOrVisible}>
          {activeTabs.map((tab) => (
            <button
              key={tab.label}
              className={tab.className}
              onClick={() => handleActiveTab(tab.label)}
            >
              {tab.label}
            </button>
          ))}
        </TabsList>
        <TabContent>bklakladkldsasldk</TabContent>
      </TabsVisibility>
    </TabContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  hiddenOrVisible: selectHiddenOrVisible,
  activeTabs: selectActiveTabs,
});

const mapDispatchToProps = (dispatch) => ({
  setActiveTab: (activeTabs) => dispatch(setActiveTab(activeTabs)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Tabs);
