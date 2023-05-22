import { NavLink } from "react-router-dom"
import links from "../../../data/links.json"
import "./_mobile-navigation.scss"

const MobileNavigation = ({ toggleNav }) => {
  return (
    <nav className='mobile-navigation'>
      {links.map(({ to, text, icon }) => (
        <NavLink onClick={toggleNav} className='mobile-navigation__link' key={to} to={to}>
          <div className='mobile-navigation__link-text'>
            <span className='material-symbols-outlined mobile-navigation__icon'>{icon}</span>
            {text}
          </div>
          <span className='material-symbols-outlined mobile-navigation__chevron'>
            -&gt;
          </span>
        </NavLink>
      ))}
    </nav>
  )
}

export default MobileNavigation
