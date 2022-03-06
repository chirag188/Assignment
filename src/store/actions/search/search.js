import * as actionLabels from "../../actionLabels";

export const searchTextStart = (payload) => {
  return {
    type: actionLabels.SEARCH_SETUP_START,
    payload,
  };
};
export const searchText = (payload) => {
  return {
    type: actionLabels.SEARCH_SETUP,
    payload,
  };
};
export const searchTextSuccess = (history) => {
  return {
    type: actionLabels.SEARCH_SETUP_SUCCESS,
    payload: history,
  };
};
export const searchTextFail = (message) => {
  return {
    type: actionLabels.SEARCH_SETUP_FAIL,
    payload: message,
  };
};
