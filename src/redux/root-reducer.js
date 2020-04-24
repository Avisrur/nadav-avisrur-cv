import { combineReducers } from "redux";

import profileReducer from "./profile/profile.reducer";
import experienceReducer from "./experience/experience.reducer";
import militaryReducer from "./military/military.reducer";
import educationReducer from "./education/education.reducer";

const rootReducer = combineReducers({
  profile: profileReducer,
  experience: experienceReducer,
  military: militaryReducer,
  education: educationReducer,
});

export default rootReducer;
