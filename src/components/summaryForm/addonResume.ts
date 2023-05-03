export default function(title:string, price:number, type: string):HTMLDivElement{


    const addonBox = document.createElement('div')
    addonBox.classList.add('flex', 'justify-between', 'mt-3')
    
    const addonName = document.createElement('p')
    addonName.classList.add('text-Cool-gray')
    addonName.textContent = `${title}`
    
    const addonPrice = document.createElement('p')
    addonPrice.classList.add('text-md', 'font-semibold', 'text-Marine-blue')
    addonPrice.textContent = `+R$${price},00/${type}`

    addonBox.append(addonName, addonPrice)

    return addonBox

}
