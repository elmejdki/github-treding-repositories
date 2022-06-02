import { IRepositoriesAction, SET_TRENDING_REPOSITORIES } from "../actions/repositories";

export interface IRepository {
  id: number;
  title: string;
  link: string;
  description: string;
  stars: number;
}

export type IRepositoriesState = IRepository[];
const respositoriesReducerDefaultState: IRepositoriesState = [];

const respositoriesReducer = (
  state = respositoriesReducerDefaultState,
  action: IRepositoriesAction,
) => {
  switch(action.type) {
    case SET_TRENDING_REPOSITORIES:
      return action.payload;
    default:
      return state;
  }
};

export default respositoriesReducer;
