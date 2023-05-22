import { useState, useEffect } from "react"
import DrinkGrid from "../../components/drink-grid/drink-grid.component"
import NoDrinksSaved from "../../components/no-drinks-saved/no-drinks-saved.component"
import "./_favorite-drinks-page.scss"

const FavoriteDrinksPage = () => {
  const [drinks, setDrinks] = useState([])
  const [savedAmount, setSavedAmount] = useState(0)

  useEffect(() => {
    const savedDrinks = localStorage.getItem("savedDrinks")
    if (savedDrinks) {
      const drinksArray = JSON.parse(savedDrinks).reverse()
      setDrinks(drinksArray)
      setSavedAmount(drinksArray.length)
    } else {
      return
    }
  }, [])

  function clearFavorites() {
    console.log("LocalStorage was cleared")
    localStorage.clear()
  }

  return (
    <main>
      <div className='favorite-drinks'>
        {(savedAmount > 0 && (
          <>
            <h1 className='favorite-drinks__header' onClick={clearFavorites}>
              favorite drinks ({savedAmount})
            </h1>
            <DrinkGrid drinks={drinks} />
          </>
        )) || <NoDrinksSaved />}
      </div>
    </main>
  )
}

export default FavoriteDrinksPage
