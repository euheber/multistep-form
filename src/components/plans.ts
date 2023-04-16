export function plans(plan:string, price: number):HTMLDivElement{
    const box = document.createElement('div')
    box.classList.add('border', 'border-Cool-gray', 'rounded-lg', 'w-32', 'h-32',  'p-2', 'hover:border-Purplish-blue', 'transition', 'duration-150', 'cursor-pointer')

    box.addEventListener('click', ()=> { console.log('olá');
    })
 
    const img = document.createElement('img')
    img.src =  '/assets/images/icon-arcade.svg'
    img.alt = 'Icone arcade'
    img.classList.add('mb-5')

    const h1 = document.createElement('h1')
    h1.textContent =  plan
    h1.classList.add('text-Marine-blue', 'font-semibold')

    const span = document.createElement('span')
    span.textContent =  `R$${price},00/mes`
    span.classList.add('text-Cool-gray', 'text-sm')

    box.append(img, h1, span)
    return box
}

