import { Burger } from "./burger"
import cn from "./style.module.css"

export const Header = () => {
  return (
    <div className={cn.headerWrapper}>
      <div className={cn.logo}>
        DEV PORFOLIO
      </div>
      <Burger />
    </div>
  )
}