import { information } from "./components/information";
import { plans } from "./components/plans";
import { addons } from "./components/addons";
import { sumamary } from "./components/summary";



const formSection = document.querySelector("#formSection") as HTMLElement

const reload = () => {
  formSection.appendChild(information("olá, mundo"))
}   

reload()
