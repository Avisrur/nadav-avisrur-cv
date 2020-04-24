import { createSelector } from "reselect";

const selectLights = (state) => state.lights;

export const selectHiddenOrVisible = createSelector(
  [selectLights],
  (lights) => lights.hiddenOrVisible
);
