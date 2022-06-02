import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestRepositoriesFetch } from "../../actions/repositories";
import { getFilterLanguage } from "../../selectors/filters";
import { getTrendingRepositories } from '../../selectors/repositories';
import {
  setFavoritesToStorage,
  IFavoritesObject,
  getFavoritesFromStorage,
} from "../../utils";
import {
  Container,
  Repository,
  Head,
  FavButton,
  Link,
  Description,
  Stars,
} from './styles';

const RepositoryList = () => {
  const language = useSelector(getFilterLanguage);
  const trendingRepositories = useSelector(getTrendingRepositories);
  const [favorites, setFavorites] = useState<IFavoritesObject>({});
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestRepositoriesFetch());
    const favs = getFavoritesFromStorage();
    setFavorites({ ...favs });
  }, []);

  useEffect(() => {
    dispatch(requestRepositoriesFetch());
  }, [language]);

  return (
    <Container>
      {trendingRepositories.map(({ id, title, description, link, stars }) => (
        <Repository key={id}>
          <Head>
            <Link href={link} target="_blank">{title}</Link>
            <FavButton
              onClick={() => {
                const newFavs = {...favorites};
                newFavs[id] = !newFavs[id];
                setFavorites({ ...newFavs });
                setFavoritesToStorage({ ...newFavs });
              }}
            >
              {favorites[id] ? '❤️' : '🤍'}
            </FavButton>
          </Head>
          <Description>{description}</Description>
          <Stars>{stars}</Stars>
        </Repository>
      ))}
    </Container>
  );
};

export default RepositoryList;
