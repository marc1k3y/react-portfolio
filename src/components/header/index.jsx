import cn from "./style.module.css"

export const Header = () => {
  return (
    <div className={cn.headerWrapper}>
      <div className={cn.logo}>
        dev portfolio
      </div>
    </div>
  )
}