import { plans } from "./plans"

let Arcade = plans("Arcade", 9)
let Advanced = plans("Advanced", 12)
let Pro = plans("Pro", 15)

export function plan(): HTMLFormElement {
  const form = document.createElement("form")
  form.classList.add("flex", "flex-col", "gap-2")

  const header = document.createElement("div")
  const h1 = document.createElement("h1")
  h1.textContent = "Selecione seu plano"
  h1.classList.add("text-4xl", "text-Marine-blue", "font-semibold")
  const p = document.createElement("p")
  p.textContent = "Escolha entre uma assinatura mensal ou anual"
  p.classList.add("text-Cool-gray", "mb-5")

  header.append(h1, p)

  const plansBox = document.createElement("div")
  plansBox.append(Arcade, Advanced, Pro)
  plansBox.classList.add("flex", "gap-2")

  const switchContainer = document.createElement("div")
  switchContainer.classList.add(
    "flex",
    "gap-2",
    "items-center",
    "w-48",
    "ml-auto",
    "mr-auto",
    "mt-10"
  )
  const monthlyOption = document.createElement("p")
  monthlyOption.classList.add("text-sm", "text-Cool-gray", "font-semibold")
  monthlyOption.textContent = "Mensal"
  const yearOption = document.createElement("p")
  yearOption.classList.add("text-sm", "text-Cool-gray", "font-semibold")
  yearOption.textContent = "Anual"

  const switchLabel = document.createElement("label")
  switchLabel.classList.add("switch")
  const checkBoxInput = document.createElement("input")
  checkBoxInput.type = "checkbox"
  checkBoxInput.classList.add("checkbox")
  const span = document.createElement("span")
  span.classList.add("slider", "round", 'border')

  switchLabel.append(checkBoxInput, span)

  switchContainer.append(monthlyOption, switchLabel, yearOption)

  checkBoxInput.addEventListener("click", function () {
    plansBox.innerHTML = ""
    if (this.checked) {
      Arcade = plans("Arcade", 12)
      Advanced = plans("Advanced", 15)
      Pro = plans("Pro", 18)
      plansBox.append(Arcade, Advanced, Pro)
      return
    }

    Arcade = plans("Arcade", 9)
    Advanced = plans("Advanced", 12)
    Pro = plans("Pro", 15)
    
    plansBox.append(Arcade, Advanced, Pro)
  })
  form.append(header, plansBox, switchContainer)

  return form
}
