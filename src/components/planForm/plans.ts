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





// # Um exemplo de como usei esse padrão de projeto para resolver um problema simples

// Costumo pegar bastante desafios do [Frontend Mentor](https://www.frontendmentor.io/home), aliás, recomendo bastante a plataforma. O problema que vou descrever aqui é simples e acabei esbarrando com ele quando parti para parte lógica da coisa. De novo, simples, porém sempre permitindo aprender algo novo, como o Singleton, ou fixar o uso de códigos que não usava há algum tempo.

// ## Qual o problema?

// Em dada a aplicação, uma série de elementos HTML checkbox é criada dinamicamente pelo retorno de uma função no typescript. Cada uma dessas caixas, quando marcadas ou desmarcadas, adiciona ou remove um objeto de um array. Como exportar esse array e fazer com que ele seja reativo? Logo no ínicio percebi que, se esse array for exportado imediatamente, alterar os itens dentro dele com alguma função no mesmo módulo não vai funcionar. Segue o código abaixo para melhor visualizar as coisas: 

// ```
// const addLanguagues = (obj:{id:number, language: string}) => languageList.push(obj)

// let languageList = [{id: 1, language: 'typescripit'}]

// addLanguagues({id:2, language:'Javascript'})

// export default objectLists
// ```

// Se você importar esse array em outro módulo vai ver que dentro dele só vai ter um único objeto, mesmo com a função acrescentando um novo objeto dentro.






