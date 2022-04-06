import cn from "./style.module.css"
import avatar from "../../assets/iam.jpg"

export const About = () => {
  return (
    <div className={cn.aboutWrapper}>
      <div className={cn.personInfo}>
        <div className={cn.avatar}>
          <img src={avatar} alt="avatar" />
        </div>
        <div className={cn.text}>
          <div className={cn.name}>
            Марк Набережных
          </div>
          <div className={cn.profession}>
            React Developer
          </div>
          <div className={cn.devDirection}>
            
          </div>
        </div>
      </div>
    </div>
  )
}