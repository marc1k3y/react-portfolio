import cn from "./style.module.css"

export const Greeting = () => {
  return (
    <div className={cn.greetingWrapper}>
      Добро пожаловать!
    </div>
  )
}