import { FavoritesPage } from "./Pages/favorites/favorites"
import { HomePage } from "./Pages/homePage/homePage"



export const HOME_ROUTE = "/"
export const FAVORITE_ROUTE = "/fav"
export const routes = [
  {
    path: HOME_ROUTE,
    element: HomePage,
  },
  {
    path: FAVORITE_ROUTE,
    element: FavoritesPage,
  }
];