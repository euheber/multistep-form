import { information } from "./components/information";
import { plan } from "./components/choosePlan";
import { addOns } from "./components/addOn";
import { summary } from "./components/summary";
const formSection = document.querySelector("#formSection") as HTMLElement


const htmlList: Array<string> = [information(), plan(), addOns(), summary()]

const controlFormOfDisplay = ():void => {
  formSection.innerHTML = htmlList[0]
}   

controlFormOfDisplay()

