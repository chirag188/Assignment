/* eslint-disable import/prefer-default-export */
import { all, takeEvery, put } from "redux-saga/effects";
import {
  searchTextFail,
  searchTextStart,
  searchTextSuccess,
} from "../../actions";
import * as actionLabels from "../../actionLabels";
import { axios } from "../../../http";

// eslint-disable-next-line no-unused-vars
function* searchTextSaga({ payload }) {
  try {
    const { search } = payload;
    yield put(searchTextStart({ search }));
    const response = yield axios.get(
      `/assignmentVideos?q=${search}&numResults=10`
    );

    if (response.status === 200) {
      yield put(
        searchTextSuccess({ search, assignmentVideos: response.data.results })
      );
    }
  } catch (err) {
    console.log(err);
    yield put(searchTextFail({ message: err.message }));
  }
}

export default function* rootsaga() {
  yield all([yield takeEvery(actionLabels.SEARCH_SETUP, searchTextSaga)]);
}
