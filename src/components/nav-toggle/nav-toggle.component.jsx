import "./_nav-toggle.scss"

const NavToggle = ({ isNavOpen, toggleNav }) => {
  return (
    <div className={`nav-toggle-wrap ${isNavOpen ? "nav-toggle-wrap__is-open" : ""}`} onClick={toggleNav}>
      <button className='button'>
        <span className='material-symbols-outlined icon'>{!isNavOpen ? "menu" : "close"}</span>
      </button>
    </div>
  )
}

export default NavToggle
