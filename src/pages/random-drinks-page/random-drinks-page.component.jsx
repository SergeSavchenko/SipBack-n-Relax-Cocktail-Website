import { useEffect, useState } from "react"
import LoadingIndicator from "../../components/loading-indicator/loading-indicator.component"
import FetchError from "../../components/fetch-error/fetch-error.component"
import DrinkGrid from "../../components/drink-grid/drink-grid.component"
import RefreshButton from "../../components/refresh-button/refresh-button.component"
import "./_random-drinks-page.scss"

const RandomDrinksPage = () => {
  const [drinks, setDrinks] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const randomDrinks = sessionStorage.getItem("randomDrinks")
    if (randomDrinks) {
      setDrinks(JSON.parse(randomDrinks))
    } else {
      fetchDrinks()
    }
  }, [])

  async function fetchDrinks() {
    setIsLoading(true)
    setIsError(false)

    let uniqueDrinks = []
    try {
      while (uniqueDrinks.length < 5) {
        const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
        const data = await response.json()
        const newDrink = data.drinks[0]
        const isUnique = !uniqueDrinks.some((drink) => drink.idDrink === newDrink.idDrink)
        if (isUnique) {
          uniqueDrinks.push(newDrink)
        }
      }
      setDrinks(uniqueDrinks)
    } catch (error) {
      setIsError(true)
    } finally {
      setIsLoading(false)
    }

    sessionStorage.setItem("randomDrinks", JSON.stringify(uniqueDrinks))
  }

  return (
    <main>
      <div className='random-drinks'>
        <h1 className='random-drinks__header'>random drinks</h1>
        {isLoading && <LoadingIndicator />}
        {isError ? <FetchError /> : isLoading ? null : <DrinkGrid drinks={drinks} />}
        {!isLoading && !isError && (
          <RefreshButton handleRefresh={fetchDrinks} isLoading={isLoading} />
        )}
      </div>
    </main>
  )
}

export default RandomDrinksPage
