// son kattami -100 va kichikmi -1 >> true

// son kattami 100 va kichikmi 1000 

// 70 ==> false


// function hisobla() {

//     if (value < -1 && value > -100 || value >= 100 && value <= 999) {
//         document.querySelector('p').innerText = true
//     } else {
//         document.querySelector('p').innerText = false
//     }
// }


function hisobla() {
    let temp = document.querySelector('input').value;
    switch (temp) {
        case '17:00': console.log('soat 17:00');
            break;
        case 'issiq': console.log('bugun havo issiq');
            break;
        case 'qor': console.log('bugun qor');
            break;
        case 'yomg\'ir': console.log('bugun yomg\'ir');
            break;
        default: console.log(
            'bunday ob havo mavjus emas'
        );
    }
}


// ------------------------------------ternary------------------------------------

//  shart ? vazifa : vazifa


// ------------------------------------switch case--------------------------------

// if  => === || == || > || < || >= || <= ||

// switch => ===  || // case 'issiq' === 'issiq'





// switch (temp) {
//     case '17:00': console.log('soat 17:00');
//         break;
//     case 'issiq': console.log('bugun havo issiq');
//         break;
//     case 'qor': console.log('bugun qor');
//         break;
//     case 'yomg\'ir': console.log('bugun yomg\'ir');
//         break;
//     default: console.log(
//         'bunday ob havo mavjus emas'
//     );
// }