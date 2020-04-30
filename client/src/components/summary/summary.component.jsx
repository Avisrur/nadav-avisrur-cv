import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectSummary } from "../../redux/profile/profile.selectors";

import {
  SummeryContainer,
  SummaryContent,
  SummarySpan,
} from "./summary.styles.jsx";
import { selectHiddenOrVisible } from "../../redux/lights/lights.selectors";

const Summary = ({ summary, hiddenOrVisible }) => (
  <SummeryContainer hiddenOrVisible={hiddenOrVisible}>
    {hiddenOrVisible === "visible" ? <SummarySpan>Summary</SummarySpan> : null}
    {hiddenOrVisible === "visible" ? (
      <SummaryContent>{summary}</SummaryContent>
    ) : null}
  </SummeryContainer>
);

const mapStateToProps = createStructuredSelector({
  summary: selectSummary,
  hiddenOrVisible: selectHiddenOrVisible,
});

export default connect(mapStateToProps)(Summary);
