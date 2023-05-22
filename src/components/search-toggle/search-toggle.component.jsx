import "./_search-toggle.scss"

const SearchToggle = ({ isSearchOpen, toggleSearch }) => {
  return (
    <div className={`search-toggle ${isSearchOpen ? "search-toggle__is-open" : ""}`} onClick={toggleSearch}>
      <button className='search-toggle__button'>
        <span className='material-symbols-outlined icon'>{!isSearchOpen ? "search" : "close"}</span>
      </button>
    </div>
  )
}

export default SearchToggle