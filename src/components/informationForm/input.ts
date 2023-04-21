export function input(labelFor:string, name:string, type:string, placeholder:string,id:string):HTMLDivElement{ 
    const inputField = document.createElement('div')
    inputField.classList.add('form-field', 'flex', 'flex-col')

    const label = document.createElement('label')
    label.htmlFor = labelFor
    label.textContent = name
    label.classList.add('text-Marine-blue', 'font-semibold')

    const input = document.createElement('input')
    input.type =  type
    input.placeholder = placeholder
    input.setAttribute('id', id)
    input.classList.add('border', 'border-Cool-gray', 'p-2', 'rounded-lg', 'cursor-pointer', 'hover:border-Purplish-blue', 'transition', 'duration-75')

    inputField.append(label, input)

    return inputField
}