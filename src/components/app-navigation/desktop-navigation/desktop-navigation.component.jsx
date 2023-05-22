import { NavLink } from "react-router-dom"
import links from "../../../data/links.json"
import "./_desktop-navigation.scss"

const DesktopNavigation = () => {
  return (
    <nav className='desktop-navigation'>
      {links.map(({ to, text, icon }) => (
        <NavLink className='desktop-navigation__link' key={to} to={to}>
          <div className='desktop-navigation__link-text'>{text}</div>
        </NavLink>
      ))}
    </nav>
  )
}

export default DesktopNavigation
