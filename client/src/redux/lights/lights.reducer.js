import LightsActionTypes from "./lights.types";
const INITIAL_STATE = {
  hiddenOrVisible: "visible",
};

const lightsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LightsActionTypes.SET_LIGHTS:
      return {
        ...state,
        hiddenOrVisible: action.payload,
      };
    default:
      return state;
  }
};

export default lightsReducer;
