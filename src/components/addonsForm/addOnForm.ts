import { addonCheckbox } from "./addonCheckbox"
export function addonsForm(): HTMLFormElement {
  const form = document.createElement("form")
  form.classList.add("flex", "flex-col", "gap-4")

  const header = document.createElement("div")
  const title = document.createElement("h1")
  title.classList.add("text-4xl", "text-Marine-blue", "font-semibold")
  title.textContent = "Selecione um complemento"
  const description = document.createElement("p")
  description.classList.add("text-Cool-gray")
  description.textContent = "Escolher um complemento melhora a sua experiência."

  header.append(title, description)


  const onlineAddon = addonCheckbox('Serviços online', 'Acesso a jogos multiplayer', 10, 'online')
  const spaceAddon = addonCheckbox('Mais espaço', '1TB de espaço extra na nuvem', 20, 'space')
  const profileAddon = addonCheckbox('Perfil customizavel', 'Customize o tema do seu perfil', 30, 'profile')

  
  form.append(header, onlineAddon, spaceAddon, profileAddon)
  return form
}
