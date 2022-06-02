import React, { useDispatch, useSelector } from 'react-redux';
import { setShowFavorites } from '../../actions/filters';
import { getShowFavorites } from '../../selectors/filters';
import {
  Container,
  Title,
  FiltersContainer,
  RadioButton,
  FavoritesFilter,
} from './styles';
import LanguageFilter from './LanguageFilter';

const RepositoryListFilters = () => {
  const showFavorites = useSelector(getShowFavorites);
  const dispatch = useDispatch();
  const handleFavoritesFilterClick = () => {
    dispatch(setShowFavorites(!showFavorites));
  }

  return (
    <Container>
      <Title>Repositories</Title>
      <FiltersContainer>
        <LanguageFilter />
        <FavoritesFilter
          onClick={handleFavoritesFilterClick}
          checked={showFavorites}
        >
          <RadioButton />
          Show favorites
        </FavoritesFilter>
      </FiltersContainer>
    </Container>
  );
};

export default RepositoryListFilters;
