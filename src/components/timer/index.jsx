import { useEffect, useState } from "react"
import cn from "./style.module.css"
import { TimeCounter } from "./timer"

export const TimePassed = () => {
  const [expTime, setExpTime] = useState()

  const interval = setInterval(() => setExpTime(TimeCounter), 1000)

  useEffect(() => () => clearInterval(interval), [interval])

  return (
    <div className={cn.timePassedWrapper}>
      <div className={cn.title}>
        Опыт React разработки
      </div>
      <div className={cn.counter}>
        {expTime}
      </div>
    </div>
  )
}

