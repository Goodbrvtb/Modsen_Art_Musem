import { FavoritesPage } from "./Pages/favorites/favorites"
import { HomePage } from "./Pages/homePage/homePage"


export const routes = [
    {
    path: "/",
    element: HomePage,
    },
    {
      path: "/fav",
      element:FavoritesPage,
    }
  ];