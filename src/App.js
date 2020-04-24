import React from "react";
import "./App.css";
import CvLightsOn from "./components/cv-lights-on/cv-lights-on.component";

const App = () => {
  return <div>{true ? <CvLightsOn /> : null}</div>;
};

export default App;
