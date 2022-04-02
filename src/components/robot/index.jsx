import { useEffect, useState } from "react"
import cn from "./style.module.css"

export const Robot = ({ children }) => {
  const [teeth, setTopTeeth] = useState(null)

  function getRandom() { return Math.random() * 100 }

  useEffect(() => {
    setInterval(() => {
      setTopTeeth(Array.from({ length: 4 }).map(() =>
        <div
          className={cn.tooth}
          style={{
            backgroundColor: getRandom() > 50
              ? "yellowgreen"
              : "black"
          }}>
        </div>))
    }, 600)
  }, [])

  return (
    <div className={cn.robotWrapper}>
      <div className={cn.robot}>
        <div className={cn.eyes}>
          <div className={cn.eye}></div>
          <div className={cn.eye}></div>
        </div>
        <div className={cn.mouth}>
          <div className={cn.topTeeth}>
            {teeth}
          </div>
          <div className={cn.bottomTeeth}>
            {teeth}
          </div>
        </div>
      </div>
      <div className={cn.text}>
        {children}
      </div>
    </div>
  )
}