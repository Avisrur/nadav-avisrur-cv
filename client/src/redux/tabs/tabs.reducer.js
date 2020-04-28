import TabsActionTypes from "./tabs.types";
const INITIAL_STATE = {
  tabs: ["Experience", "Education", "Military"],
  activeTabs: [
    { label: "Experience", className: "tab-button-active" },
    { label: "Education", className: "tab-button" },
    { label: "Military", className: "tab-button" },
  ],
};

const tabsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TabsActionTypes.SET_ACTIVE_TAB:
      return {
        ...state,
        activeTabs: action.payload,
      };
    default:
      return state;
  }
};

export default tabsReducer;
