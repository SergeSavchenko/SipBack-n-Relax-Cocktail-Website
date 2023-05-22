import { useState } from "react"
import { useRoutes } from "react-router-dom"
import routes from "./routes"
import AppHeader from "./components/app-header/app-header.component"
import PageOverlay from "./components/page-overlay/page-overlay.component"

const App = () => {
  const element = useRoutes(routes)
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  function toggleNav() {
    setIsNavOpen(!isNavOpen)
  }

  function toggleSearch() {
    setIsSearchOpen(!isSearchOpen)
  }

  return (
    <>
      <AppHeader
        isNavOpen={isNavOpen}
        toggleNav={toggleNav}
        isSearchOpen={isSearchOpen}
        toggleSearch={toggleSearch}
      />
      {(isNavOpen || isSearchOpen) && <PageOverlay />}
      {element}
    </>
  )
}

export default App
