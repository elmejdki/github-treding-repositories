import { IRepositoriesState } from "./repositories";
import { IFiltersState } from "./filters";

export interface IState {
  repositories: IRepositoriesState;
  filters: IFiltersState;
}
