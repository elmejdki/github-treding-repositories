const filtersReducerDefaultState = {
  showFavorites: false,
}

interface IAction {
  type: string;
  showFavorites: string;
}

const filtersReducer = (state = filtersReducerDefaultState, action: IAction) => {
  switch(action.type) {
    case 'SHOW_FAVORITE_REPOSITORIES':
      return {
        ...state,
        showFavorites: action.showFavorites,
      };
    default:
      return state;
  };
}

export default filtersReducer;
