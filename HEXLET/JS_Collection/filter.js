const uniq = (arr) => arr.filter((arrItem, index) => arr.indexOf(arrItem, !-index));
console.log(uniq([2, 1, 2, 3]));
console.log(uniq([-2, 20, 0, 4, 20, 0]));   //TODO not work

// const uniq = (arr) => arr.filter((arrItem, (arr.indexOf(arrItem))) => arr.indexOf(arrItem, !-index));
// console.log(uniq([2, 1, 2, 3]));
// console.log(uniq([-2, 20, 0, 4, 20, 0]));

// for debugger

// function uniq(arr) {
//     debugger;
//     let result = arr.filter(function (item, index) {
//         return arr.indexOf(item, !index);
//     });
//     return result;
// }
// console.log(uniq([2, 1, 2, 3]));