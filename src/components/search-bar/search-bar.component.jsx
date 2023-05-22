import { useState, useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"
import "./_search-bar.scss"

const SearchBar = ({ toggleSearch }) => {
  const [searchQuery, setSearchQuery] = useState("")
  const navigate = useNavigate()
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  function handleInputChange(e) {
    setSearchQuery(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    navigate(`/search-results/${searchQuery}`)
    toggleSearch()
  }

  return (
    <div className='search-bar'>
      <form className='search-bar__form' onSubmit={handleSubmit}>
        <input
          type='text'
          className='search-bar__input'
          placeholder='Search...'
          value={searchQuery}
          onChange={handleInputChange}
          ref={inputRef}
        />
        <button className='search-bar__button' type='submit'>
          <span className='material-symbols-outlined icon'>search</span>
        </button>
      </form>
    </div>
  )
}

export default SearchBar
