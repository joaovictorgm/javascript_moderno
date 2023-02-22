



export function label(attributes) {//export pode ser usado antes de uma função ou váriavel
    const element = document.createElement('label')
    Object.assign(element, attributes)
    return element
}

 export function input(attributes) {
    const element = document.createElement('input')
    Object.assign(element, attributes)
    return element
}

export function br() {
    const element = document.createElement('br')
    return element
}