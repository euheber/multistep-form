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
    "w-32",
    "h-32",
    "p-2",
    "hover:border-Purplish-blue",
    "transition",
    "duration-150",
    "cursor-pointer",
    `${active}`
  )

  const img = document.createElement("img")
  img.src = `/assets/images/icon-${plan.toLowerCase()}.svg`
  img.alt = "Icone arcade"
  img.classList.add("mb-5")

  const h1 = document.createElement("h1")
  h1.textContent = plan
  h1.classList.add("text-Marine-blue", "font-semibold")

  const span = document.createElement("span")
  span.textContent = `R$${price},00/${type}`
  span.classList.add("text-Cool-gray", "text-sm")

  box.append(img, h1, span)
  box.addEventListener("click", () => {
    const boxes = document.querySelectorAll(
      ".plan"
    ) as NodeListOf<HTMLDivElement>
    boxes.forEach((box) => box.classList.remove("border-Purplish-blue"))
    box.classList.add("border-Purplish-blue")

    objetos.subscribe(plan, type, price)
    objetos.notify(plan)
    console.log(objetos);
  })

  return box
}

class Observable {
  // cada instância da classe Observer
  // começa com um array vazio de observadores/observers
  // que reagem a uma mudança de estado
  constructor(public observers:string[] = []) {}

  // adicione a capacidade de inscrever um novo objeto / Elemento DOM
  // essencialmente, adicione algo ao array de observadores
  subscribe(plan:string, type:string, price:number) {
    if(this.observers.length > 0) this.observers.length = 0
    this.observers.push(plan);
    this.observers.push(type);
    this.observers.push(price.toString());
  }

  // adicione a capacidade de cancelar a inscrição de um objeto em particular
  // essencilamente, remove algum item do array de observadores
  unsubscribe(plan:string) {
    this.observers = this.observers.filter(subscriber => subscriber !== plan);
  }

  // atualiza todos os objetos inscritos / Elementos DOM
  // e passa alguns dados para cada um deles
  notify(data:string) {
    if(this.observers.length > 0) this.observers.pop()
    this.observers.push(data);
  }
}


const objetos = new Observable()


export default objetos