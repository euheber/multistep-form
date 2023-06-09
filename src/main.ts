import { information } from "./components/informationForm/information"
import { plan } from "./components/planForm/choosePlan"
import { addonsForm } from "./components/addonsForm/addOnForm"
import { summary } from "./components/summaryForm/summary"
import done from "./components/doneComponent/done"

const formSection = document.querySelector("#form") as HTMLDivElement
const nextBtn = document.querySelector("#nextBtn") as HTMLButtonElement
const returnBtn = document.querySelector("#returnBtn") as HTMLButtonElement
const btns = document.querySelectorAll(".btn") as NodeListOf<HTMLButtonElement>
const controlFormBtns = document.querySelector('#control-form') as HTMLDivElement
const htmlList = [information, plan, addonsForm, summary, done]
let activeChild: HTMLElement;

let activeForm = 0
let activeBtn: HTMLButtonElement

const controlFormOfDisplay = (): void => {
  if(activeChild) formSection.removeChild(activeChild)

  let htmlContent = htmlList[activeForm]()
  formSection.appendChild(htmlContent)
  activeChild = htmlContent
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
    if(!input.value){
      input.classList.add('border-Strawberry-red')
      formIsOk = false
      setTimeout(() => input.classList.remove('border-Strawberry-red'),3000)
    }
  })

  return formIsOk
}


nextBtn.addEventListener("click", function (): void {
if(!checkForm()) return

  currentStep()
  activeForm++

  
  if (activeForm >=3) nextBtn.textContent = 'Finalizar'
  if (activeForm == 4)controlFormBtns.classList.add('hidden')
  
  controlFormOfDisplay()
})

returnBtn.addEventListener("click", (): void => {
  if (activeForm <= 3){
    nextBtn.textContent = 'Próxima etapa'
  }
  currentStep()
  if (activeForm <= 0) return
  activeForm--
  controlFormOfDisplay()
})


controlFormOfDisplay()

