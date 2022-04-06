import cn from "./style.module.css"
import { Avatar } from "../avatar"
import { About } from "../about"

export const Main = () => {
  return (
    <div className={cn.mainWrapper}>
      <Avatar />
      <About />
    </div>
  )
}