const BackButton = () => {
  const handleClick = () => {
    window.history.back()
  }

  return (
    <button
      onClick={handleClick}
      className='drink-details__button'
      title='Go back to previous screen'
    >
      go back
    </button>
  )
}

export default BackButton
