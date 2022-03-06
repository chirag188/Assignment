import { combineReducers } from "redux";

import searchReducer from "./search/search";

const allReducers = combineReducers({
  searchReducer,
});

const rootReducer = (state, action) => {
  if (action.type === "RESET_APP") {
    // eslint-disable-next-line no-param-reassign
    state = undefined;
  }
  return allReducers(state, action);
};

export default rootReducer;
