import spinner from "../../assets/images/spinner.gif"
import "./_loading-indicator.scss"

const LoadingIndicator = () => {
  return (
    <div className='loading-indicator'>
      <img src={spinner} alt='Loading spinner' className='loading-indicator__spinner' />
      <p className='loading-indicator__text'>Fetching drinks...</p>
    </div>
  )
}

export default LoadingIndicator
