import axios from 'axios';
import { IRepository } from '../../reducers/repositories';
import { getDate } from '../../utils';

interface IGithubData {
  id: number;
  svn_url: string;
  name: string;
  description: string;
  stargazers_count: number;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const fetchTrendingRepositories = async (language: any) => {
  try {
    const { data: { items } } = await axios.get(
      `https://api.github.com/search/repositories?q=created:>${
        getDate(Date.now(), 7)}${
          language && '+language:' + language}&sort=stars&order=desc`);

    const result: IRepository[] = items.map(({
      id,
      svn_url,
      name,
      description,
      stargazers_count,
    }: IGithubData) => {
      return {
        id,
        title: name,
        link: svn_url,
        description,
        stars: stargazers_count,
      };
    });

    return result;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (e: any) {
    console.log(e.message);
  }
};
