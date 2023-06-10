// const arr = ['akobir', 'alijon', 'begzod', 'sardor', 'diyorbek'];

// arr[arr.length - 1];

// console.log(arr.at(-1)); arrayni indexi bo'yicha valuesini qaytaradi

// const numbers = [1, 2, 3, 4, 5]

// 12345


// console.log([3, 4, 2, 4] + [6]);
// const newArr = array1.concat(array2);


// console.log(Array.isArray([])) => true;


// let arr2 = [2, 3, 4, 8, 10];
// arr2[3] = 5;

// console.log(arr2);



// const arr = ['akobir', 'alijon', 'begzod', 'sardor', 'diyorbek'];
// const array = ['lacetti', 'cobalt', 'matiz', 'nexia', 'spark', 'damas', 'gentra', 'inomarka', 'tiko'];
// const numbers = [1, 2, 3, 4, 5]

// const newArr = arr.concat(array, numbers);

// console.log(newArr);


// const array = ['lacetti', 'cobalt', 'matiz', 'nexia', 'spark', 'damas', 'gentra', 'inomarka', 'tiko'];



// console.log(array[0]);
// console.log(array[1]);
// console.log(array[2]);
// console.log(array[3]);




// ---------------------------------------------for loops-----------------------------------


// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }



// for (index in array) {
//     console.log(index); // for in array indexlarini aylanib chiqadi
// }



// for (Element of array) {
//     console.log(Element); for of array elementlarini aylanib chiqadi
// }




// -----------------------------------------IndexOf-----------------------------------



// const array = ['lacetti', 'cobalt', 'matiz', 'nexia', 'spark', 'damas', 'gentra', 'inomarka', 'spark', 'tiko', 'spark'];

// console.log(array.indexOf('spark'));

// 1) elementning turgan indexini qaytaradi
// 2) topilmasa -1 qaytaradi



// let arr2 = [2, 3, 4, 8, 10, 20, 4, 2, 5, 6, 2, 5, 25, 54, 656, 112,];

// arr2[arr2.indexOf(25)] = 50

// console.log(arr2);


// -----------------------------------------lastIndexOf-----------------------------------


// const array = ['lacetti', 'cobalt', 'matiz', 'nexia', 'spark', 'damas', 'gentra', 'inomarka', 'spark', 'tiko', 'spark'];

// console.log(array.lastIndexOf('spark') - 4);




// ----------------------------------------INCLUDES-----------------------------------------



// arrow =()=>

// const array = ['lacetti', 'cobalt', 'matiz', 'nexia', 'damas', 'gentra', 'inomarka', 'spark', 'tiko', 'spark'];

// const search = () => {

//     let value = document.querySelector('input').value;

//     if (array.includes(value)) {
//         document.querySelector('body').innerHTML += `<div class='div'> <h2>${array[array.indexOf(value)]}</h2> </div>`
//     } else {
//         console.log('topilmadi');
//     }
// }



// ---------------------------------------SORT--------------------------------------



// const arr = ['dilshod', 'alijon', 'begzod', 'akobir', 'sardor', 'diyor']

// let tartiblangan = arr.sort();// parametrsiz sort alifbo shaklida tartiblaydi




// const arr = [4, 5, 3, 7, 22, 9, 10, 1, 6]

// arr.sort((a, b) => { return b - a })  // kattadan maydaga sort
// arr.sort((a, b) => { return a - b })  // maydadan kattaga sort

// console.log(arr);

