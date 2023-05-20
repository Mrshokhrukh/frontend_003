let one = document.querySelectorAll('li')[0]
let two = document.querySelectorAll('li')[1]
let three = document.querySelectorAll('li')[2]

function clickedOne() {
    one.classList.add('active')
    two.classList.remove('active')
    three.classList.remove('active')
}
function clickedTwo() {
    one.classList.remove('active')
    two.classList.add('active')
    three.classList.remove('active')
}
function clickedThree() {
    one.classList.remove('active')
    two.classList.remove('active')
    three.classList.add('active')
}