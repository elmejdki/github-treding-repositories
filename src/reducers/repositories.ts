interface IRepository {
  id: string;
  name: string;
};

interface IAction {
  id: string;
  updates: IRepository;
  repositories: IRepository[];
  type: string;
};

const respositoriesReducerDefaultState: IRepository[] = [];

const respositoriesReducer = (
  state = respositoriesReducerDefaultState,
  action: IAction,
) => {
  switch(action.type) {
    case 'SET_REPOSITORIES':
      return action.repositories;
    default:
      return state;
  };
};

export default respositoriesReducer;
