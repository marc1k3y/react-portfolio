import cn from "./style.module.css"
import { links } from "./links"
import { NavLink, useLocation } from "react-router-dom"

export const Navbar = ({ visible, close }) => {
  const { pathname } = useLocation()
  return (
    <div className={visible ? cn.navbarWrapper : cn.off}>
      <div className={cn.links}>
        {links.map(link =>
          <NavLink
            onClick={() => close(false)}
            style={{ backgroundColor: link.to === pathname && "white", color: link.to === pathname && "rgb(114,137,218)" }}
            key={link.to}
            to={link.to}>
            {link.title}
          </NavLink>)}
      </div>
      <div className={cn.bottomBar}>
        <div className={cn.socialLinks}>
        </div>
      </div>
    </div >
  )
}