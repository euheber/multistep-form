import { information } from "./components/information"
import { plan } from "./components/choosePlan"
import { addOns } from "./components/addOn"
import { summary } from "./components/summary"

const formSection = document.querySelector("#form") as HTMLElement
const nextBtn = document.querySelector("#nextBtn") as HTMLButtonElement
const returnBtn = document.querySelector("#returnBtn") as HTMLButtonElement
const btns = document.querySelectorAll(".btn") as NodeListOf<HTMLButtonElement>


const htmlList = [information(), plan(), addOns(), summary()]

let activeForm = 0
let activeBtn: HTMLButtonElement

const controlFormOfDisplay = (): void => {
  formSection.innerHTML = htmlList[activeForm]
  currentStep()
  activeForm == 0
    ? returnBtn.classList.add("hidden")
    : returnBtn.classList.remove("hidden")
}

const currentStep = (): void => {
  if (activeForm > 3 || activeForm < 0) return
  if (activeBtn) activeBtn.classList.remove("bg-Pastel-blue")
  btns.forEach((btn, index) => {
    if (activeForm == index) {
      activeBtn = btn
      btn.classList.add("bg-Pastel-blue")
    }
  })
}

const checkForm = ():Boolean =>{
  let formIsOk = true
  const inputs =  document.querySelectorAll('input') as NodeListOf<HTMLInputElement>

  inputs.forEach(input => { 
    if(!input.value) formIsOk = false
  })

  return formIsOk
}


nextBtn.addEventListener("click", function (): void {
  if(!checkForm()) return
  currentStep()
  if (activeForm >= 3) return

  activeForm++
  controlFormOfDisplay()
})

returnBtn.addEventListener("click", (): void => {
  currentStep()
  if (activeForm <= 0) return
  activeForm--
  controlFormOfDisplay()
})


type plan = { 
  plan: string,
  planPrice: number,
  addon: string,
  addPrice: number,

  total():number
}

controlFormOfDisplay()

