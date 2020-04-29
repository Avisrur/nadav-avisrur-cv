import { createSelector } from "reselect";

const selectTabs = (state) => state.tabs;

export const selectActiveTabs = createSelector(
  [selectTabs],
  (tabs) => tabs.activeTabs
);
