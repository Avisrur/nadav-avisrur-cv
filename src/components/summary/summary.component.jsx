import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectSummary } from "../../redux/profile/profile.selectors";

import { SummeryContainer, SummaryContent } from "./summary.styles.jsx";

const Summary = ({ summary }) => (
  <SummeryContainer>
    <SummaryContent>{summary}</SummaryContent>
  </SummeryContainer>
);

const mapStateToProps = createStructuredSelector({
  summary: selectSummary,
});

export default connect(mapStateToProps)(Summary);
