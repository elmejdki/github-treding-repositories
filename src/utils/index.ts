export interface IFavoritesObject {
  [key: string]: boolean;
}

export const getDate = (date: number, days: number): string => {
  const d = new Date(date);
  d.setDate(d.getDate() - days);
  return d.getFullYear() + 
    "-" + ( 
      d.getMonth() + 1 < 10 ? '0' +
      (d.getMonth() + 1) : (d.getMonth() + 1) 
      ) +
    "-" + (d.getDate() < 10 ? '0' + d.getDate() : d.getDate());
}

export const getFavoritesFromStorage = () => {
  return JSON.parse(localStorage.getItem('favorites') || '{}')
}

export const setFavoritesToStorage = (favs: IFavoritesObject) => {
  localStorage.setItem('favorites', JSON.stringify({ ...favs }));
}
