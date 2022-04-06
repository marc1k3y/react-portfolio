import cn from "./style.module.css"

export const Project = () => {
  return (
    <div className={cn.projectWrapper}>
      <b>Hurry Network</b> <br /> <br />
      Международная сеть кафе, кофеен, ресторанов. <br /> <br />
      Мне была знакома ситуация, когда в заведении "запара",
      звонит телефон, а на другом конце провода заказ со всеми
      возможными деталями. Это отнимает порядочное количество времени,
      а вероятность что-то забыть или перепутать очень высока. <br /> <br />

      Приложение <b>Hurry</b> позволяет зарегистрироваться кафе,
      кофейне, ресторану.
      Однажды ввести позиции в меню. Затем принимать полностью
      сформираванные
      заказы гостей в телеграм. Одно сообщение со всеми деталями,
      вместо пятиминутного диалога. <br /> <br />

      <b>Проект сейчас запущен и я надеюсь найдёт свою аудиторию пользователей.</b> <br /> <br />

      Познакомиться с ним можно на его
      <a href="https://marc1k3y.github.io/hurry-network/" 
      target="_blank" rel="noreferrer"> странцие</a>,
      нажав на кнопку "How work", дальше будут подсказки :)

    </div>
  )
}