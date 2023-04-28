export default function(addonType:string, price:number):HTMLDivElement{
    const addon = document.createElement('div')
    addon.classList.add('flex', 'justify-between', 'mt-3')
    
    const addonName = document.createElement('p')
    addonName.classList.add('text-Cool-gray')
    addonName.textContent = `${addonType}`
    
    const addonPrice = document.createElement('p')
    addonPrice.classList.add('text-md', 'font-semibold', 'text-Marine-blue')
    addonPrice.textContent = `+R$${price},00/mês`

    addon.append(addonName, addonPrice)
  return addon
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