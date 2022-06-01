import { put, takeLatest } from 'redux-saga/effects'

function* fetchRepositories(action: any) {
  try {
    // const repositories = yield call(Api.fetchRepos);
    yield put({type: "REPOSITORIES_FETCH_SUCCEEDED", repositories: {}});
  } catch (e) {
    yield put({type: "REPOSITORIES_FETCH_FAILED", message: 'Something happened'});
  }
};

function* repositoriesSaga() {
  yield takeLatest("USER_FETCH_REQUESTED", fetchRepositories);
};

export default repositoriesSaga;
