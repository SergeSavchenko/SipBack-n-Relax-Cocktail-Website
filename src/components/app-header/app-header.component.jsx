import MobileNavigation from "../app-navigation/mobile-navigation/mobile-navigation.component"
import DesktopNavigation from "../app-navigation/desktop-navigation/desktop-navigation.component"
import NavToggle from "../nav-toggle/nav-toggle.component"
import SearchBar from "../search-bar/search-bar.component"
import SearchToggle from "../search-toggle/search-toggle.component"
import "./_app-header.scss"

const AppHeader = ({ isNavOpen, toggleNav, isSearchOpen, toggleSearch }) => {

  function handleNavToggle() {
    if (isSearchOpen) {
      toggleSearch()
    }
    toggleNav()
  }

  function handleSearchToggle() {
    if (isNavOpen) {
      toggleNav()
    }
    toggleSearch()
  }

  return (
    <div className='app-header'>
      <span className='app-header__logo'>SipBack’n’Relax</span>
      <DesktopNavigation />
      {isNavOpen && <MobileNavigation toggleNav={toggleNav} />}
      {isSearchOpen && <SearchBar toggleSearch={toggleSearch} />}
      <SearchToggle isSearchOpen={isSearchOpen} toggleSearch={handleSearchToggle} />
      <NavToggle isNavOpen={isNavOpen} toggleNav={handleNavToggle} />
    </div>
  )
}

export default AppHeader
