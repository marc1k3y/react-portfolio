import { useState } from "react"
import { DownloadCV } from "./downloadCV"
import { SocialLinks } from "./socialLinks"
import cn from "./style.module.css"

export const About = () => {
  const [about, setAbout] = useState("me")
  return (
    <div className={cn.aboutWrapper}>
      <SocialLinks />
      <div className={cn.switcher}>
        <div className={cn.me} style={{ backgroundColor: about === "me" && "rgb(114,137,218)" }} onClick={() => setAbout("me")}>
          обо мне
        </div>
        <div className={cn.skills} style={{ backgroundColor: about === "skills" && "rgb(114,137,218)" }} onClick={() => setAbout("skills")}>навыки</div>
        <div className={cn.project} style={{ backgroundColor: about === "project" && "rgb(114,137,218)" }} onClick={() => setAbout("project")}>проект</div>
      </div>
      <div className={cn.text}>
        {about === "me" && <div className={cn.textMe}>
          Небольшая предыстория.
        </div>}
        {about === "skills" && <div className={cn.textSkills}>
          Скилы.
        </div>}
        {about === "project" && <div className={cn.textProject}>
          Проект
        </div>}
      </div>
      <DownloadCV />
    </div>
  )
}