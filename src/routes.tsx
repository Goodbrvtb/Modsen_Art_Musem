import { FavoritesPage } from "./Pages/favorites/favorites"
import { HomePage } from "./Pages/homePage/homePage"
import { DetailInfo } from "./Pages/detailInfo/detailInfo"



export const HOME_ROUTE = "/"
export const FAVORITE_ROUTE = "/fav"
export const DETAIL_INFO = "/detailInfo"
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
  }
];