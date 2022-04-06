import cn from "./style.module.css"
import github from "../../../assets/github.svg"
import telegram from "../../../assets/telegram.svg"

export const SocialLinks = () => {
  return (
    <div className={cn.socialLinksWrapper}>
      <a href="https://github.com/marc1k3y" target="_blank" rel="noreferrer">
        <img src={github} alt="github" />
      </a>
      <a href="https://t.me/marc1k3y">
        <img src={telegram} alt="telegram" />
      </a>
    </div>
  )
}