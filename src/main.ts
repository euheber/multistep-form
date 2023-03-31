import { information } from "./components/information";


const formSection = document.querySelector("#formSection") as HTMLElement

const reload = ():void => {
  formSection.innerHTML = information()
}   


reload()

