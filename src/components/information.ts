export function information (info:string):any { 
    const div = document.createElement('div')
    div.textContent = `${info}`


    return div
}