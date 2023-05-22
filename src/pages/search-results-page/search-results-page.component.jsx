import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import DrinkGrid from "../../components/drink-grid/drink-grid.component"
import FetchError from "../../components/fetch-error/fetch-error.component"
import LoadingIndicator from "../../components/loading-indicator/loading-indicator.component"
import NoDrinksFound from '../../components/no-drinks-found/no-drinks-found.component'
import "./_search-results-page.scss"

const SearchResultsPage = () => {
  const { query } = useParams()
  const [drinks, setDrinks] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const cachedQuery = JSON.parse(sessionStorage.getItem(`cachedQuery-${query}`))
    if (cachedQuery) {
      setDrinks(cachedQuery)
    } else {
      fetchDrinks()
    }
  }, [query])

  async function fetchDrinks() {
    setIsLoading(true)
    setIsError(false)

    try {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`
      )
      const data = await response.json()
      const drinks = data.drinks || []
      setDrinks(drinks)
      sessionStorage.setItem(`cachedQuery-${query}`, JSON.stringify(drinks))
    } catch (error) {
      setIsError(true)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main>
      <div className='search-results'>
        {isLoading && <LoadingIndicator />}
        {isError ? (
          <FetchError />
        ) : drinks.length > 0 ? (
          <>
            {!isLoading && (
              <>
                <h1 className='search-results__header'>{drinks.length} Drinks Found:</h1>
                <DrinkGrid drinks={drinks} />
              </>
            )}
          </>
        ) : (
          <NoDrinksFound query={query}/>
        )}
      </div>
    </main>
  )
}

export default SearchResultsPage
