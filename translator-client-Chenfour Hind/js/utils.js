function getElement(id) {
    let result = document.getElementById(id);
    return result
}

function getInputValue(id) {
    let input = document.getElementById(id);
    return input.value
}

function hideElement(id) {
    console.log('hiding')
    let elem = document.getElementById(id)
    elem.style.display = 'none'
}

function flexElement(id) {
    console.log('flexing')
    let elem = document.getElementById(id)
    elem.style.display = 'flex'
}

function changePlaceholder(inputId, newPh) {
    let input = document.getElementById(inputId)
    input.setAttribute('placeholder', newPh)
}

function emptyInput(inputId) {
    let input = document.getElementById(inputId)
    input.value = ""
}

function deboldItems(items) {
    for(let i = 0; i < items.length; i++) {
        items[i].style.fontWeight = 'lighter'
    }
}

function changeClass(id, newClass) {
    let element = document.getElementById(id)
    element.setAttribute('class', newClass)
}

function removeClass (id, className) {
    let element = document.getElementById(id);
    element.classList.remove(className);
}

function removeClassElems (className, ...ids) {
    for(let i = 0; i < ids.length; i++) {
        let element = document.getElementById(ids[i]);
        element.classList.remove(className);
    }
}