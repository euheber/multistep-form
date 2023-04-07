import { information } from "./components/information"
import { plan } from "./components/choosePlan"
import { addOns } from "./components/addOn"
import { summary } from "./components/summary"

const formSection = document.querySelector("#form") as HTMLElement
const nextBtn = document.querySelector("#nextBtn") as HTMLButtonElement
const returnBtn = document.querySelector('#returnBtn') as HTMLButtonElement
const btns = document.querySelectorAll('.btn') as NodeListOf<HTMLButtonElement>

const htmlList: Array<string> = [information(), plan(), addOns(), summary()]

let activeForm = 0
let activeBtn:HTMLButtonElement;


const controlFormOfDisplay = (): void => {
  formSection.innerHTML = htmlList[activeForm]
  currentStep()
  if(activeForm == 0){ 
    returnBtn.classList.add('hidden')
  
  } else{ 
    returnBtn.classList.remove('hidden')
  }
}

const currentStep = ():void => {
  if(activeForm > 3 || activeForm < 0) return
  if(activeBtn) activeBtn.classList.remove('bg-Pastel-blue')
  btns.forEach((btn, index) => { 
    if(activeForm == index) { 
      activeBtn = btn
      btn.classList.add('bg-Pastel-blue')
    }
   
  })
}

nextBtn.addEventListener("click", function () {
  currentStep()
  if (activeForm >= 3) return
  
  activeForm++
  controlFormOfDisplay()
})

returnBtn.addEventListener('click', () => { 
  currentStep()
  if(activeForm <= 0) return
  activeForm--
  controlFormOfDisplay()
})

controlFormOfDisplay()
