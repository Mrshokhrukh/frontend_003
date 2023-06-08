


let counter = 0;

function increase() {
    counter += 1
    document.querySelector('h2').innerText = counter
}
function decrease() {
    counter -= 1
    document.querySelector('h2').innerText = counter
}
function reset() {
    counter = 0
    document.querySelector('h2').innerText = counter
}