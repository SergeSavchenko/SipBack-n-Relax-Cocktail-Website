import image from "../../assets/images/sorry.png"
import "./_fetch-error.scss"

const FetchError = () => {
  return (
    <div className='fetch-error'>
      <img src={image} alt='Error image' className='fetch-error__image' />
      <h1 className='fetch-error__header'>Something went wrong</h1>
      <p className='fetch-error__text'>Unable to fetch drinks...</p>
    </div>
  )
}

export default FetchError
