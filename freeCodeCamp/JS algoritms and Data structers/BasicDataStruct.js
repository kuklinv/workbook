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