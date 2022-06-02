import React from 'react';
import { Main, Header, Footer } from './styles';
import RepositoryListFilters from '../RepositoryListFilters';
import RepositoryList from '../RepositoryList';

const Home = () => (
  <>
    <Header>
      Trending GITHUB repositories in the last 7 days
    </Header>
    <Main>
      <RepositoryListFilters />
      <RepositoryList />
    </Main>
    <Footer>© Copyright Zakariae El Mejdki 2022.</Footer>
  </>
);

export default Home;
