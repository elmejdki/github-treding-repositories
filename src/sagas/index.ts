import { all, spawn } from 'redux-saga/effects';
import repositoriesSaga from './respositoriesSaga';

const sagas = [
  repositoriesSaga,
];

const root_sagas = function* () {
  yield all(sagas.map(saga => spawn(saga)));
};

export default root_sagas;
