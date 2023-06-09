import addonState from "../../store/addonState"

export function addonCheckbox(title:string, description:string, price:number, checkboxNameId:string):HTMLLabelElement { 
    const label = document.createElement('label')
    label.classList.add('label','border', 'border-Cool-gray', 'rounded-lg', 'hover:border-Purplish-blue', 'w-full', 'cursor-pointer', 'transition', 'duration-150', 'flex', 'items-center', 'gap-4', 'p-2')
    label.htmlFor = checkboxNameId

    const input = document.createElement('input')
    input.type = 'checkbox'
    input.setAttribute('id', checkboxNameId)
    input.classList.add('accent-Marine-blue',)
    
  
    addonState.getInstance().checkAddon({title:title}) ? input.checked = true : input.checked = false
    
 
    input.addEventListener('change', function(){ 
        if(this.checked){
            label.classList.add( 'border-Purplish-blue')
            addonState.getInstance().setAddon(title, price)             
        } else {
            label.classList.remove( 'border-Purplish-blue')
            addonState.getInstance().removeAddon({title:title})   
        }
    
    })
    
    const addonContainer = document.createElement('div')
    const addonTitle = document.createElement('h1')
    addonTitle.classList.add('text-sm', 'font-bold', 'text-Marine-blue')
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
