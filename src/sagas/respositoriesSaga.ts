import { call, put, select, takeLatest } from 'redux-saga/effects'
import { fetchTrendingRepositories } from '../api/repositories';
import { REPOSITORIES_FETCH_REQUEST, setTrendingRepositories } from '../actions/repositories';
import { IRepository } from '../reducers/repositories';
import { getFilterLanguage } from '../selectors/filters';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function* fetchRepositories(): any {
  const state = yield select();
  const language = getFilterLanguage(state);
  const trendingRepositories: IRepository[] =
    yield call(fetchTrendingRepositories, language);
  yield put(setTrendingRepositories(trendingRepositories));
}

function* repositoriesSaga() {
  yield takeLatest(REPOSITORIES_FETCH_REQUEST, fetchRepositories);
}

export default repositoriesSaga;
