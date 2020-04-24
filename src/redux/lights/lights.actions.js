import LightsActionTypes from "./lights.types";

export const fetchCollectionsSuccess = (visibleOrHidden) => ({
  type: LightsActionTypes.SET_LIGHTS,
  payload: visibleOrHidden,
});
