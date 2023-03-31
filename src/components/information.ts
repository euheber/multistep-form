export function information(info: string): HTMLElement {
  const div = document.createElement("div")
  div.textContent = `${info}`

  return div
}
