import { createSelector } from "reselect";

export const selectProfile = (state) => state.profile;

export const selectSummary = createSelector(
  [selectProfile],
  (profile) => profile.summary
);

export const selectSkills = createSelector(
  [selectProfile],
  (profile) => profile.skills
);
