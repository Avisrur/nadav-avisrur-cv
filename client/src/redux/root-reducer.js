import { combineReducers } from "redux";

import profileReducer from "./profile/profile.reducer";
import experienceReducer from "./experience/experience.reducer";
import militaryReducer from "./military/military.reducer";
import educationReducer from "./education/education.reducer";
import lightsReducer from "./lights/lights.reducer";
import tabsReducer from "./tabs/tabs.reducer";

const rootReducer = combineReducers({
  profile: profileReducer,
  experience: experienceReducer,
  military: militaryReducer,
  education: educationReducer,
  lights: lightsReducer,
  tabs: tabsReducer,
});

export default rootReducer;
