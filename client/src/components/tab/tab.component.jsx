import React from "react";

import "./tab.styles.scss";

const Tab = ({ label, active }) => {
  let classname = "tab-button";
  if (active) {
    classname += "-active";
  }
  return <button className={classname}>{label}</button>;
};

export default Tab;
