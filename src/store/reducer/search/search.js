/* eslint-disable import/no-anonymous-default-export */
import * as actionLabels from "../../actionLabels";

const initialState = {
  errorMsg: null,
  assignmentVideos: [],
  loading: false,
  search: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionLabels.SEARCH_SETUP_START: {
      // const { search } = action.payload;
      return {
        ...state,
        loading: true,
        // search,
      };
    }
    case actionLabels.SEARCH_SETUP_SUCCESS: {
      const { assignmentVideos, search } = action.payload;
      return {
        ...state,
        assignmentVideos,
        search,
        loading: false,
      };
    }
    case actionLabels.SEARCH_SETUP_FAIL: {
      return {
        ...state,
        errorMsg: action.payload.message,
        loading: false,
        assignmentVideos: [],
      };
    }
    default:
      return state;
  }
};
