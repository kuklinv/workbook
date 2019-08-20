// const uniq = (arr) => arr.filter((arrItem, index) => arr.indexOf(arrItem, !-index)); // TODO сделать через filter & indexOf
console.log(uniq([2, 1, 2, 3]));
console.log(uniq([-2, 20, 0, 4, 20, 0]));

// for debugger

function uniq(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i += 1) {
        let temp = [...arr];
        console.log(temp);
        console.log(arr[i]);
        let  tempArr = temp.splice(i);
        console.log(tempArr);
        let chekker = temp.indexOf(arr[i]);
        console.log(chekker);
        if (chekker == -1) {
            result.push(arr[i]);
        }
        temp = [];
        tempArr = [];
    }
    return result;
}

// function uniq(arr) {
//     debugger;
//     let result = arr.filter(function (item, index) {
//         if (arr.slice(index).indexOf(item) < 0) return item;
//     });
//     return result;
// }

// console.log(uniq([2, 1, 2, 3]));
//
// function uniq(arr) {
//     debugger;
//     let result = arr.filter(function (item, index) {
//         return item[index]  === item[arr.indexOf(item)]; // arr.indexOf(item, !index);
//     });
//     return result;
// }

// function uniq(arr) {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i += 1) {
//         if (!arr.indexOf(arr[i])) {
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// }