import waiter from "../../assets/images/waiter2.png"
import "./_error-404-page.scss"

const Error404Page = () => {
  return (
    <main>
      <div className='error-404'>
        <img src={waiter} alt='404 error image' className='error-404__image' />
        <h1 className='error-404__header'>Oops! This page does not exist.</h1>
        <p className='error-404__text'>Please use the navigation to go to the correct page.</p>
      </div>
    </main>
  )
}

export default Error404Page
