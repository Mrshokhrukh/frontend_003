
// -----------------while (do while)---------------------



// while (!son === 0) {

// }


// do {
//     prompt('son kiriting');
//     console.log(son);
// }
// while (!son === 0);



// -------------------------------------------------------------------------------



// son = parseInt(prompt('son kiriting'))

// let sum = son;

// while (!(son == 0)) {
//     son = parseInt(prompt('son kiriting'));
//     sum += son
// }

// console.log(sum);


// function change() {
//     let red = Math.floor(Math.random() * 255);
//     let green = Math.floor(Math.random() * 255);
//     let blue = Math.floor(Math.random() * 255);
//     document.querySelector('#body').style.backgroundColor = `rgb(${red},${green},${blue})`
// }
// change()


// HEX HSL / HSLA / RGB / RGBA => 255



// function changeWithInput() {
//     let input = document.querySelector('input').value
//     document.querySelector('#body').style.backgroundColor = input
// }



function changeWithInput() {
    let input = document.querySelector('input').value
    document.querySelector('h3').innerText = input
}