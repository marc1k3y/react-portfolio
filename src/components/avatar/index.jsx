import cn from "./style.module.css"
import avatar from "../../assets/iam.jpg"
import reactLogo from "../../assets/react.svg"
import { TimePassed } from "../timer"

export const Avatar = () => {
  return (
    <div className={cn.avatarWrapper}>
      <img src={avatar} alt="avatar" />
      <div className={cn.devInfo}>
        <div className={cn.reactLogo}>
          <img src={reactLogo} alt="react-logo" />
        </div>
        <div className={cn.text}>
          <div className={cn.name}>
            Марк Набережных
          </div>
          <div className={cn.profession}>
            React Developer
          </div>
        </div>
      </div>
      <TimePassed />
    </div>
  )
}