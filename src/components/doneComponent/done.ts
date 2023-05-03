

export default function ():HTMLDivElement{
    const container = document.createElement('div')
    container.classList.add('flex','flex-col', 'justify-center', 'items-center', 'mt-20')
    const img = document.createElement('img')
    img.src = '/assets/images/icon-thank-you.svg'


    const title = document.createElement('h1')
    title.classList.add('text-lg', 'font-bold', 'text-Marine-blue')
    title.textContent = 'Obrigado!'
    
    container.append(img, title)

    return container
}