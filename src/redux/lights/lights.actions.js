import LightsActionTypes from "./lights.types";

export const setLights = (visibleOrHidden) => ({
  type: LightsActionTypes.SET_LIGHTS,
  payload: visibleOrHidden,
});
