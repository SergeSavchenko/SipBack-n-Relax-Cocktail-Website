import { useState } from "react"

import BackButton from "./back-button/back-button.component"
import FavoriteButton from "./favorite-button/favorite-button.component"
import SaveModal from "../save-modal/save-modal.component"

import "./_drink-details.scss"

const DrinkDetails = ({ drink, isSaved, handleSaveDrink, handleDeleteDrink }) => {
  const [message, setMessage] = useState("")

  function filterIngredients() {
    const ingredients = []
    const measurements = []

    const keys = Object.keys(drink).filter(
      (key) => key.startsWith("strIngredient") || key.startsWith("strMeasure")
    )

    for (const key of keys) {
      const value = drink[key]
      if (value) {
        if (key.startsWith("strIngredient")) {
          ingredients.push(value)
        } else {
          measurements.push(value)
        }
      }
    }

    return ingredients.map((ingredient, index) => ({
      name: ingredient,
      measure: measurements[index],
    }))
  }

  function handleFavoriteClick() {
    if (isSaved) {
      handleDeleteDrink(drink)
      setMessage(`removed ${drink.strDrink} from favorites`)
    } else {
      handleSaveDrink(drink)
      setMessage(`added ${drink.strDrink} to favorites`)
    }
    setTimeout(() => {
      setMessage("")
    }, 2000)
    return <SaveModal />
  }

  return (
    <div className='drink-details'>
      <h2 className='drink-details__title'>{drink.strDrink}</h2>
      <div className='drink-details__image-container'>
      {message && <SaveModal message={message} />}
        <img className='drink-details__image' src={drink.strDrinkThumb} alt='Drink image' />
        {isSaved && (
          <span className='drink-details__saved-tag'>
            <span className='material-symbols-rounded drink-details__save-icon'>favorite</span>
          </span>
        )}
      <div className='drink-details__button-container'>
        <BackButton />
        <FavoriteButton
          text={isSaved ? "remove favorite" : "save as favorite"}
          handleOnClick={handleFavoriteClick}
        />
      </div>
      </div>
      <div className='drink-details__info-container'>
        <h2 className='drink-details__title-lg'>{drink.strDrink}</h2>
        <span className='drink-details__text'>{drink.strInstructions}</span>
        <ul>
          {filterIngredients().map((ingredient, index) => (
            <li className='drink-details__text' key={index}>
              {ingredient.name}: {ingredient.measure}
            </li>
          ))}
        </ul>
        <div className='drink-details__tag-container'>
          <h3 className='drink-details__tag'>{drink.strCategory}</h3>
          <h3 className='drink-details__tag'>{drink.strAlcoholic}</h3>
          <h3 className='drink-details__tag'>{drink.strGlass}</h3>
        </div>
      </div>
    </div>
  )
}

export default DrinkDetails
