import { Link } from 'react-router-dom'
import noresults from "../../assets/images/no-results.png"
import './_no-drinks-found.scss'

const NoDrinksFound = ({ query }) => {
  return (
    <div className="no-drinks-found">
      <img src={noresults} alt='No results image' className='no-drinks-found__image' />
      <h1 className='no-drinks-found__header'>No results for "{query}".</h1>
      <p className='no-drinks-found__text'>Please try a different search term or check out some random drinks.</p>
      <Link className='no-drinks-found__link' to='/'>
       Check Random Drinks!
      </Link>
    </div>
  )
}

export default NoDrinksFound