import PlanContext from "../../store/planState"

export function plans(
  plan: string,
  price: number,
  type: string,
  active?: string
): HTMLDivElement {
  const box = document.createElement("div")
  box.classList.add(
    "border",
    "plan",
    "border-Cool-gray",
    "rounded-lg",
    "p-2",
    "hover:border-Purplish-blue",
    "transition",
    "duration-150",
    "cursor-pointer",
    "w-full",
    "flex",
    "gap-5",
    "items-center",
    `${active}`
  )

  const img = document.createElement("img")
  img.src = `/assets/images/icon-${plan.toLowerCase()}.svg`
  img.alt = "Icone arcade"

  const title = document.createElement("h1")
  title.textContent = plan
  title.classList.add("text-Marine-blue", "font-semibold")

  const span = document.createElement("span")
  span.textContent = `R$${price},00/${type}`
  span.classList.add("text-Cool-gray", "text-sm")

  const planPrice = document.createElement('div')
  planPrice.append(title, span)
  box.append(img, planPrice)
  box.addEventListener("click", () => {
    const boxes = document.querySelectorAll(
      ".plan"
    ) as NodeListOf<HTMLDivElement>
    boxes.forEach((box) => box.classList.remove("border-Purplish-blue"))
    box.classList.add("border-Purplish-blue")
      PlanContext.getInstance().setPlan({
        name: plan,
        price,
        type
      })

    
  })

  return box
}






