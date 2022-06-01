import {
  Container,
  Title,
  FiltersContainer,
  RadioButton,
  FavoritesFilter,
} from './styles';

const RepositoryListFilters = () => (
  <Container>
    <Title>Repositories</Title>
    <FiltersContainer>
      <FavoritesFilter>
        Show favorite: <RadioButton />
      </FavoritesFilter>
    </FiltersContainer>
  </Container>
);

export default RepositoryListFilters;
