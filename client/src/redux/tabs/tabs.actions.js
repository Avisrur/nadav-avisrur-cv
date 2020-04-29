import TabsActionTypes from "./tabs.types";

export const setActiveTab = (activeTabs) => ({
  type: TabsActionTypes.SET_ACTIVE_TAB,
  payload: activeTabs,
});
