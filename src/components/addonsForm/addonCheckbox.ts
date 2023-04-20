export function addonCheckbox(title:string, description:string, price:number, checkboxNameId:string):HTMLLabelElement { 
    const label = document.createElement('label')
    label.classList.add('label','border', 'border-Cool-gray', 'rounded-lg', 'hover:border-Purplish-blue', 'w-full', 'cursor-pointer', 'transition', 'duration-150', 'flex', 'items-center', 'gap-4', 'p-2')
    label.htmlFor = checkboxNameId

    const input = document.createElement('input')
    input.type = 'checkbox'
    input.setAttribute('id', checkboxNameId)
    input.classList.add('accent-Marine-blue',)

    const addonContainer = document.createElement('div')
    const addonTitle = document.createElement('h1')
    addonTitle.classList.add('text-sm', 'font-semibold', 'text-Marine-blue')
    addonTitle.textContent = title
    const addOndescription = document.createElement('p')
    addOndescription.classList.add('text-Cool-gray', 'text-sm')
    addOndescription.textContent = description
    addonContainer.append(addonTitle, addOndescription)
    
    const addonPriceBox = document.createElement('div')
    addonPriceBox.classList.add('ml-auto')
    const addonPrice = document.createElement('p')
    addonPrice.classList.add('text-sm', 'text-Purplish-blue')
    addonPrice.textContent = `+R$${price}/mês`
    addonPriceBox.append(addonPrice)


    label.append(input, addonContainer, addonPriceBox)
    return label
}
