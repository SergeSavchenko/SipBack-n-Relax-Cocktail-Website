import { useState, useEffect } from "react"
import DrinkHeader from "./drink-header/drink-header.component"
import { Link } from "react-router-dom"
import "./_drink-card.scss"

const DrinkCard = ({ drinks }) => {
  const [savedDrinks, setSavedDrinks] = useState([])

  useEffect(() => {
    const savedDrinks = JSON.parse(localStorage.getItem("savedDrinks")) || []
    setSavedDrinks(savedDrinks)
  }, [])

  function isDrinkSaved(drink) {
    return savedDrinks.some((savedDrink) => savedDrink.idDrink === drink.idDrink)
  }

  return (
    <div className='drink-grid'>
      {drinks.map((drink) => (
        <Link
          to={`/details/${drink.strDrink}`}
          state={{ drink }}
          className='drink-card__link'
          key={drink.idDrink}
        >
          <div className='drink-card'>
            <div className='drink-card__image-container'>
              <img src={drink.strDrinkThumb} alt={drink.strDrink} className='drink-card__image' />
            </div>
            <div className='drink-card__information'>
              <DrinkHeader
                drink_name={drink.strDrink}
                drink_category={drink.strCategory}
                drink_type={drink.strAlcoholic}
              />
              {isDrinkSaved(drink) && (
                <span className='material-symbols-rounded drink-card__fav-icon'>favorite</span>
              )}
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default DrinkCard
