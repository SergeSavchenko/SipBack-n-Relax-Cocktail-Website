import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import DrinkDetails from "../../components/drink-details/drink-details.component"

const DrinkDetailsPage = () => {
  const {
    state: { drink },
  } = useLocation()

  const [isSaved, setIsSaved] = useState(false)

  useEffect(() => {
    checkIfSaved()
  }, [])

  function checkIfSaved() {
    const savedDrinks = JSON.parse(localStorage.getItem("savedDrinks"))

    if (savedDrinks) {
      const existingDrink = savedDrinks.find((savedDrink) => savedDrink.idDrink === drink.idDrink)

      if (existingDrink) {
        setIsSaved(true)
      } else {
        setIsSaved(false)
      }
    } else {
      setIsSaved(false)
    }
  }

  function saveDrink(drink) {
    setIsSaved(true)

    let savedDrinks = JSON.parse(localStorage.getItem("savedDrinks"))
    if (!savedDrinks) {
      savedDrinks = []
    }

    const existingDrink = savedDrinks.find((savedDrink) => savedDrink.idDrink === drink.idDrink)
    if (existingDrink) {
      return
    }

    savedDrinks.push(drink)
    localStorage.setItem("savedDrinks", JSON.stringify(savedDrinks))
  }

  function deleteDrink(drink) {
    setIsSaved(false)

    let savedDrinks = JSON.parse(localStorage.getItem("savedDrinks"))

    if (!savedDrinks) {
      return
    }

    savedDrinks = savedDrinks.filter((savedDrink) => savedDrink.idDrink !== drink.idDrink)

    localStorage.setItem("savedDrinks", JSON.stringify(savedDrinks))
  }

  return (
    <main>
      <DrinkDetails
        drink={drink}
        handleDeleteDrink={deleteDrink}
        handleSaveDrink={saveDrink}
        isSaved={isSaved}
      />
    </main>
  )
}

export default DrinkDetailsPage
