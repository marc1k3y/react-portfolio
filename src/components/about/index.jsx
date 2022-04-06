import cn from "./style.module.css"
import { useState } from "react"
import { DownloadCV } from "./downloadCV"
import { Me } from "./me"
import { Project } from "./project"
import { Skills } from "./skills"
import { SocialLinks } from "./socialLinks"

export const About = () => {
  const [about, setAbout] = useState("me")

  function switcher() {
    switch(about) {
      case "skills":
        return <Skills />
      case "project":
        return <Project />
      default:
        return <Me />
    }
  }
  return (
    <div className={cn.aboutWrapper}>
      <div className={cn.aboutWindow}>
        <div className={cn.switcher}>
          <div className={cn.me} style={{ backgroundColor: about === "me" && "rgb(114,137,218)", fontWeight: about === "me" && "bold" }} onClick={() => setAbout("me")}>
            обо мне
          </div>
          <div className={cn.skills} style={{ backgroundColor: about === "skills" && "rgb(114,137,218)", fontWeight: about === "skills" && "bold" }} onClick={() => setAbout("skills")}>навыки</div>
          <div className={cn.project} style={{ backgroundColor: about === "project" && "rgb(114,137,218)", fontWeight: about === "project" && "bold" }} onClick={() => setAbout("project")}>проект</div>
        </div>
        <div className={cn.text}>
          {switcher()}
        </div>
      </div>
      <SocialLinks />
      <DownloadCV />
    </div>
  )
}