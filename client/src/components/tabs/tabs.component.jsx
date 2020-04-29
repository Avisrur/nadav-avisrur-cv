import React, { useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectHiddenOrVisible } from "../../redux/lights/lights.selectors";
import { selectActiveTabs } from "../../redux/tabs/tabs.selectors";

import Experience from "../experience/experience.component";
import Education from "../education/education.component";
import Military from "../military/military.component";

import {
  TabContainer,
  TabsList,
  TabContent,
  ButtonContainer,
} from "./tabs.styles";
import "./tab.styles.scss";
import { setActiveTab } from "../../redux/tabs/tabs.actions";

const Tabs = ({ hiddenOrVisible, activeTabs, setActiveTab }) => {
  const [activeTab, setTab] = useState("Experience");
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
    setTab(label);
  }

  return (
    <TabContainer hiddenOrVisible={hiddenOrVisible}>
      <TabsList>
        {activeTabs.map((tab) => (
          <ButtonContainer
            hiddenOrVisible={hiddenOrVisible}
            key={tab.label}
            className={tab.className}
            onClick={() => handleActiveTab(tab.label)}
          >
            {tab.label}
          </ButtonContainer>
        ))}
      </TabsList>
      <TabContent>
        {
          {
            Experience: <Experience />,
            Education: <Education />,
            Military: <Military />,
          }[activeTab]
        }
      </TabContent>
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
