const DrinkHeader = ({ drink_name, drink_category, drink_type }) => {
  return (
    <div className='drink-card__header'>
      <h2 className='drink-card__name'>{drink_name}</h2>
      <h3 className='drink-card__category'>{drink_category}</h3>
      <h3 className='drink-card__type'>{drink_type}</h3>
    </div>
  )
}

export default DrinkHeader
