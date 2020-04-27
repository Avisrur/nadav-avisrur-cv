import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectHiddenOrVisible } from "../../redux/lights/lights.selectors";

import Tab from "../tab/tab.component";

import { TabContainer, TabButton, TabsList } from "./tabs.styles";

const Tabs = ({ hiddenOrVisible }) => {
  return (
    <TabContainer hiddenOrVisible={hiddenOrVisible}>
      <TabsList hiddenOrVisible={hiddenOrVisible}>
        <Tab label="Experience" active={true} />
        <Tab label="Education" active={false} />
        <Tab label="Military" active={false} />
      </TabsList>
    </TabContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  hiddenOrVisible: selectHiddenOrVisible,
});

export default connect(mapStateToProps)(Tabs);
