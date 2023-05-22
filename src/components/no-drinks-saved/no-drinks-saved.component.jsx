import { Link } from "react-router-dom"
import waiter from "../../assets/images/waiter.png"
import "./_no-drinks-saved.scss"

const NoDrinksSaved = () => {
  return (
    <div className='no-saved-drinks'>
      <img src={waiter} alt='Waiter image' className='no-saved-drinks__image' />
      <h1 className='no-saved-drinks__header'>Nothing to see here... yet</h1>
      <p className='no-saved-drinks__text'>Go check some random drinks and save your favorites!</p>
      <Link className='no-saved-drinks__link' to='/'>
       Check Random Drinks!
      </Link>
    </div>
  )
}

export default NoDrinksSaved
