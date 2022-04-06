import cn from "./style.module.css"
import business from "../../../assets/business.svg"
import developer from "../../../assets/developer.svg"
import layout from "../../../assets/layout.svg"
import coding from "../../../assets/coding.svg"
import architect from "../../../assets/architect.svg"
import language from "../../../assets/language.svg"

export const Skills = () => {
  return (
    <div className={cn.skillsWrapper}>
      <div className={cn.general}>
      <div className={cn.business}>
          <img src={business} alt="business" />
          <div className={cn.desc}>
            Понимание приоритета бизнеса в разработке;
          </div>
        </div>
        <div className={cn.layout}>
          <img src={developer} alt="developer" />
          <div className={cn.desc}>
            В состоянии самостоятельно решать поставленные задачи;
          </div>
        </div>
        <div className={cn.layout}>
          <img src={layout} alt="layout" />
          <div className={cn.desc}>
            Кроссбраузерная, адаптивная вёрстка;
          </div>
        </div>
        <div className={cn.coding}>
          <img src={coding} alt="coding" />
          <div className={cn.desc}>
            Знание и умение применять алгоритмы программирования;
          </div>
        </div>
        <div className={cn.architect}>
          <img src={architect} alt="architect" />
          <div className={cn.desc}>
            Построение крупноархитектурных приложений;
          </div>
        </div>
        <div className={cn.language}>
          <img src={language} alt="language" />
          <div className={cn.desc}>
            Разработка UI на английском языке;
          </div>
        </div>
      </div>
      <div className={cn.linearSkills}>
        <div className={cn.title}>
          Основные инструменты разработки
        </div>
        <div className={cn.linearSkill}>
          <div className={cn.skillName}>
            google.com
          </div>
          <div className={cn.lineWrapper}>
            <div className={cn.line} style={{ width: "100%"}}></div>
          </div>
        </div>
        <div className={cn.linearSkill}>
          <div className={cn.skillName}>
            JavaScript
          </div>
          <div className={cn.lineWrapper}>
            <div className={cn.line} style={{ width: "80%"}}></div>
          </div>
        </div>
        <div className={cn.linearSkill}>
          <div className={cn.skillName}>
            React
          </div>
          <div className={cn.lineWrapper}>
            <div className={cn.line} style={{ width: "90%"}}></div>
          </div>
        </div>
        <div className={cn.linearSkill}>
          <div className={cn.skillName}>
            Redux
          </div>
          <div className={cn.lineWrapper}>
            <div className={cn.line} style={{ width: "95%"}}></div>
          </div>
        </div>
        <div className={cn.linearSkill}>
          <div className={cn.skillName}>
            TypeScript
          </div>
          <div className={cn.lineWrapper}>
            <div className={cn.line} style={{ width: "50%"}}></div>
          </div>
        </div>
        <div className={cn.linearSkill}>
          <div className={cn.skillName}>
            Axios
          </div>
          <div className={cn.lineWrapper}>
            <div className={cn.line} style={{ width: "100%"}}></div>
          </div>
        </div>
        <div className={cn.linearSkill}>
          <div className={cn.skillName}>
            React Router
          </div>
          <div className={cn.lineWrapper}>
            <div className={cn.line} style={{ width: "90%"}}></div>
          </div>
        </div>
        <div className={cn.linearSkill}>
          <div className={cn.skillName}>
            Node JS
          </div>
          <div className={cn.lineWrapper}>
            <div className={cn.line} style={{ width: "65%"}}></div>
          </div>
        </div>
        <div className={cn.linearSkill}>
          <div className={cn.skillName}>
            Express JS
          </div>
          <div className={cn.lineWrapper}>
            <div className={cn.line} style={{ width: "70%"}}></div>
          </div>
        </div>
        <div className={cn.linearSkill}>
          <div className={cn.skillName}>
            MongoDB
          </div>
          <div className={cn.lineWrapper}>
            <div className={cn.line} style={{ width: "70%"}}></div>
          </div>
        </div>
        <div className={cn.linearSkill}>
          <div className={cn.skillName}>
            Mongoose
          </div>
          <div className={cn.lineWrapper}>
            <div className={cn.line} style={{ width: "80%%"}}></div>
          </div>
        </div>
        <div className={cn.linearSkill}>
          <div className={cn.skillName}>
            Next JS
          </div>
          <div className={cn.lineWrapper}>
            <div className={cn.line} style={{ width: "50%"}}></div>
          </div>
        </div>
        <div className={cn.linearSkill}>
          <div className={cn.skillName}>
            git
          </div>
          <div className={cn.lineWrapper}>
            <div className={cn.line} style={{ width: "80%"}}></div>
          </div>
        </div>
        <div className={cn.linearSkill}>
          <div className={cn.skillName}>
            npm
          </div>
          <div className={cn.lineWrapper}>
            <div className={cn.line} style={{ width: "90%"}}></div>
          </div>
        </div>
      </div>
    </div>
  )
}