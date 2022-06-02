import { IRepository } from "../reducers/repositories";

export const REPOSITORIES_FETCH_REQUEST = 'repositories/REPOSITORIES_FETCH_REQUESTED';
export const SET_TRENDING_REPOSITORIES = 'repositories/SET_TRENDING_REPOSITORIES';
const INIT_ACTION = '@@INIT';

interface IInitAction {
  type: typeof INIT_ACTION;
}

export interface IRequestRepositoriesFetch {
  type: typeof REPOSITORIES_FETCH_REQUEST;
}

export interface ISetTrendingRepositories {
  payload: IRepository[];
  type: typeof SET_TRENDING_REPOSITORIES;
}

export type IRepositoriesAction = (
  IInitAction |
  IRequestRepositoriesFetch |
  ISetTrendingRepositories
);

export const requestRepositoriesFetch = (): IRequestRepositoriesFetch => ({
  type: REPOSITORIES_FETCH_REQUEST,
});

export const setTrendingRepositories = (payload: IRepository[]): ISetTrendingRepositories => ({
  type: SET_TRENDING_REPOSITORIES,
  payload,
});
