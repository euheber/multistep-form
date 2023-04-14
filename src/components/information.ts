export function information(): HTMLFormElement {
  const form = document.createElement('form')
  form.classList.add('form', 'space-y-4', 'flex', 'flex-col')

  const div = document.createElement('div')
  const h1 = document.createElement('h1')
  h1.textContent = 'Informações Pessoais'
  h1.classList.add('text-4xl', 'text-Marine-blue', 'font-semibold')
  const p = document.createElement('p')
  p.classList.add('text-Cool-gray', 'mb-5')
  p.textContent = 'Forneça seu nome, email e número de telefone'
  div.append(h1, p)

  const nameFormField = document.createElement('div')
  nameFormField.classList.add('form-field', 'flex', 'flex-col')
  const labelName = document.createElement('label')
  labelName.htmlFor = 'name'
  labelName.textContent = 'Nome'
  labelName.classList.add('text-Marine-blue', 'font-semibold')
  const inputName = document.createElement('input')
  inputName.type = 'text'
  inputName.placeholder = 'Digite seu some'
  inputName.setAttribute('id', 'name')
  inputName.classList.add('border', 'border-Cool-gray', 'p-2', 'rounded-lg', 'inputField', 'cursor-pointer', 'hover:border-Purplish-blue', 'transition', 'duration-75')
  nameFormField.append(labelName, inputName)
  
  const emailFormField = document.createElement('div')
  emailFormField.classList.add('form-field', 'flex', 'flex-col')
  const emailLabel = document.createElement('label')
  emailLabel.htmlFor = 'email'
  emailLabel.textContent = 'Email'
  emailFormField.classList.add('text-Marine-blue', 'font-semibold')
  const inputEmail = document.createElement('input')
  inputEmail.type = 'text'
  inputEmail.placeholder = 'Digite seu email'
  inputEmail.setAttribute('id', 'email')
  inputEmail.classList.add('border', 'border-Cool-gray', 'p-2', 'rounded-lg', 'inputField', 'cursor-pointer', 'hover:border-Purplish-blue', 'transition', 'duration-75')
  emailFormField.append(emailLabel, inputEmail)


  const passwordFormField = document.createElement('div')
  passwordFormField.classList.add('form-field', 'flex', 'flex-col')
  const passwordLabel = document.createElement('label')
  passwordLabel.htmlFor = 'phone'
  passwordLabel.textContent = 'Telefone'
  passwordLabel.classList.add('text-Marine-blue', 'font-semibold')
  const inputPassword = document.createElement('input')
  inputPassword.type = 'text'
  inputPassword.placeholder = 'Digite seu telefone'
  inputPassword.setAttribute('id', 'phone')
  inputPassword.classList.add('border', 'border-Cool-gray', 'p-2', 'rounded-lg', 'inputField', 'cursor-pointer', 'hover:border-Purplish-blue', 'transition', 'duration-75')
  passwordFormField.append(passwordLabel, inputPassword)

  form.append(div, nameFormField, emailFormField, passwordFormField)
  return form
}
