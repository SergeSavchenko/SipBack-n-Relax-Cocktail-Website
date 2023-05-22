import "./_refresh-button.scss"

const RefreshButton = ({ handleRefresh, isLoading }) => {
  return (
    <button
      onClick={handleRefresh}
      className='refresh-btn'
      disabled={isLoading}
      title='Refresh list of drinks'
    >
      fetch new drinks!
    </button>
  )
}

export default RefreshButton
