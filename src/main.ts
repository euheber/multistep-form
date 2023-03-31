import { information } from "./components/information"

const formSection = document.querySelector("#formSection") as HTMLElement

const reload = () => {
  formSection.appendChild(information("olá, mundo"))
}

reload()
