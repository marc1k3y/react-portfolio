import cn from "./style.module.css"

export const DownloadCV = () => {
  return (
    <div className={cn.downloadCVWrapper}>
      <a href="../files/cv.pdf" download>Скачать портфолио</a>
    </div>
  )
}