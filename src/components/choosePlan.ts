import { plans } from "./plans"

export function plan(): HTMLFormElement {
  const form = document.createElement("form")

  form.append(plans('Arcade', 9), plans('Pro', 20))

  return form
}
