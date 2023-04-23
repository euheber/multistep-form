import { input } from "./input"

export function information(): HTMLFormElement {
  const form = document.createElement('form')
  form.classList.add('form', 'space-y-4', 'flex', 'flex-col')

  const container = document.createElement('div')
  const h1 = document.createElement('h1')
  h1.textContent = 'Informações Pessoais'
  h1.classList.add('text-4xl', 'text-Marine-blue', 'font-semibold')
  const p = document.createElement('p')
  p.classList.add('text-Cool-gray', 'mb-5')
  p.textContent = 'Forneça seu nome, email e número de telefone'
  container.append(h1, p)


  const nameField = input('name', 'Nome', 'text', 'Digite seu nome', 'name')
  const emailField = input('email', 'Email', 'text', 'Digite seu email', 'email')
  const phoneField = input('phone', 'Telefone', 'tel', 'Digite seu telefone', 'phone')

  form.append(container, nameField, emailField, phoneField)
  
  return form
}
