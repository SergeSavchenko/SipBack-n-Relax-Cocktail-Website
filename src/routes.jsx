import AboutPage from "./pages/about-page/about-page.component"
import DrinkDetailsPage from "./pages/drink-details-page/drink-details-page.component"
import Error404Page from "./pages/404-error-page/error-404-page.component"
import RandomDrinksPage from "./pages/random-drinks-page/random-drinks-page.component"
import FavoriteDrinksPage from "./pages/favorite-drinks-page/favorite-drinks-page.component"
import SearchResultsPage from "./pages/search-results-page/search-results-page.component"

const routes = [
  { path: "/", element: <RandomDrinksPage /> },
  { path: "/about", element: <AboutPage /> },
  { path: "/details/:drinkname", element: <DrinkDetailsPage /> },
  { path: "/favorites", element: <FavoriteDrinksPage /> },
  { path: "/search-results/:query", element: <SearchResultsPage /> },
  { path: "*", element: <Error404Page /> },
]

export default routes
