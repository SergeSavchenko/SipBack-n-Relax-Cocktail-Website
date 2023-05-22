import DrinkCard from '../drink-card/drink-card.component'
import "./_drink-grid.scss"

const drinkGrid = ({ drinks }) => {
  return (
    <div>
      <DrinkCard drinks={drinks}/>
    </div>
  )
}

export default drinkGrid