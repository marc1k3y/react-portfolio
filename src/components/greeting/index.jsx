import cn from "./style.module.css"
import { useState } from "react"
import { MyInput } from "../UI/input"
import { MyButton } from "../UI/button"

export const Greeting = () => {
  const [name, setName] = useState("")
  return (
    <div className={cn.greetingWrapper}>
      <div className={cn.text}>
        Привет, я виртуальный помощник разработчика!
      </div>
      <form>
        <div>Как я могу к тебе обращаться?</div>
        <MyInput
          type="text"
          value={name.slice(0, 1).toUpperCase() + name.slice(1,)}
          onChange={e => setName(e.target.value)}
          placeholder="желательно имя" />
        {name.length > 2 && <MyButton>Далее</MyButton>}
      </form>
    </div>
  )
}