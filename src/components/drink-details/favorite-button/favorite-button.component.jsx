const FavoriteButton = ({ text, title, handleOnClick }) => {
  return (
    <button onClick={handleOnClick} className='drink-details__button' title={title}>
      {text}
    </button>
  )
}

export default FavoriteButton
