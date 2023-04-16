import { plans } from "./plans"

export function plan(): HTMLFormElement {
  const form = document.createElement("form")
  form.classList.add('flex', 'gap-2')

  form.append(plans('Arcade', 9), plans('Advanced', 20), plans('Pro', 30))

  return form
}
