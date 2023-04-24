
export function summary():HTMLElement{ 
  const container = document.createElement('section')
  container.classList.add('flex', 'flex-col', 'space-y-5')


  const header = document.createElement('div')
  const title = document.createElement('h1')
  title.classList.add('text-4xl', 'text-Marine-blue', 'font-semibold')
  title.textContent = 'Revisando'
  const description = document.createElement('p')
  description.classList.add('text-Cool-gray')
  description.textContent = 'Confirme suas escolhas antes de confirmar'
  header.append(title, description)

  const planContainer = document.createElement('div')
  planContainer.classList.add('border-b', 'border-Light-gray', 'pb-6')
  const planType = document.createElement('div')
  planType.classList.add( 'flex', 'items-center', 'justify-between')
  const planTitle = document.createElement('h1')
  planTitle.classList.add('text-md', 'text-Marine-blue', 'font-bold')
  planTitle.textContent = `Mensal`
  const planPrice = document.createElement('span')
  planPrice.classList.add('text-md', 'text-Marine-blue', 'font-semibold')
  planPrice.textContent = `R$9,00/ Mensal`
  planType.append(planTitle, planPrice)
  planContainer.append(planType)
  container.append(header, planContainer)


  
    return container
}



`
      <div class="flex justify-between mt-3">
        <p class="text-Cool-gray">Serviços online</p>
        <p class="text-md font-semibold text-Marine-blue">+R$10,00/mês</p>
      </div>
      <div class="flex justify-between mt-3">
        <p class="text-Cool-gray">Mias espaço</p>
        <p class="text-md font-semibold text-Marine-blue">+R$20,00/mês</p>
      </div>

      <div class="flex justify-between mt-10">
        <p class="text-Cool-gray">Total (por mês)</p>
        <p class="text-lg font-bold text-Purplish-blue">R$39,00/mês</p>
      </div>
    </div>
    
`