///////////////////////////////////////////////////// Introduction to the Basic Data Structure Challenges

//replase items in array with splice
function colorChange(arr, index, newColor) {
    arr.splice(index, 1, newColor);
    return arr;
}

let colorScheme = ['#878787', '#a08794', '#bb7e8c', '#c9b6be', '#d1becf'];

colorScheme = colorChange(colorScheme, 2, '#332327');
// we have removed '#bb7e8c' and added '#332327' in its place
// colorScheme now equals ['#878787', '#a08794', '#332327', '#c9b6be', '#d1becf']

//////////////////////////////////////  use ....spread operator for combine arrays

let thisArray = ['sage', 'rosemary', 'parsley', 'thyme'];

let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander'];
// thatArray now equals ['basil', 'cilantro', 'sage', 'rosemary', 'parsley', 'thyme', 'coriander']

//////////////////////////////////////////////////////////// filtering array with "FOR"

function filteredArray(arr, elem) {
    let newArr = [...arr];
    for (let i = 0; i < newArr.length; i += 1) {
        for (let j = 0; j < newArr[i].length; j += 1) {
            if (newArr[i][j] == elem) {
                newArr[i].splice(j, 1);
            }
        }
    }
    return newArr;
}

filteredArray([
    [10, 8, 3],
    [14, 6, 23],
    [3, 18, 6]
], 18)

// => [ [ 10, 8, 3 ], [ 14, 6, 23 ], [ 3, 6 ] ]

////////////////////////////////////////////////////////////////////// 

/// важно! долго искал как перебрать. первый уровень перебираем через FOR а проверку влоденного второго уровны на наличие определенного
//// элемента выполняет indexOf !!!  и не заходим внутрь этого уровня через for/ остаемся на первом уровне и манипулируем им и его
// элементами спокойно через методы массивов

function filteredArray(arr, elem) {
    let newArr = [];
    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i].indexOf(elem) == -1) { ////  вот оно. фильтруем находясь на этом первом уровне через for
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(filteredArray([
    [10, 8, 3],
    [14, 6, 23],
    [3, 18, 6]
], 18));
console.log(filteredArray([
    [3, 2, 3],
    [1, 6, 3],
    [3, 13, 26],
    [19, 3, 9]
], 3));
console.log(filteredArray([
    ["trumpets", 2],
    ["flutes", 4],
    ["saxophones", 2]
], 2));

/////////////////////////////////////////////////////////// nested array//// 5 levels

let myNestedArray = [
    // change code below this line
    ['unshift', ['deep', ['deeper', ['deepest', 1, 2, 3, 'complex', 'nested']]]],
];

///////////////////////////////////////////////