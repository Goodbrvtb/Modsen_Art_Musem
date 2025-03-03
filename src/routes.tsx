import { DetailInfo } from './pages/detailInfo/detailInfo';
import { FavoritesPage } from './pages/favorites/favorites';
import { HomePage } from './pages/homePage/homePage';
import { NotFound } from './pages/notFound/notFound';

export const HOME_ROUTE = '/';
export const FAVORITE_ROUTE = '/fav';
export const DETAIL_INFO = '/detailInfo';
export const NOT_FOUND = '/*';
export const routes = [
  {
    path: HOME_ROUTE,
    element: HomePage,
  },
  {
    path: `${DETAIL_INFO}/:id`,
    element: DetailInfo,
  },
  {
    path: FAVORITE_ROUTE,
    element: FavoritesPage,
  },
  {
    path: NOT_FOUND,
    element: NotFound,
  },
];
