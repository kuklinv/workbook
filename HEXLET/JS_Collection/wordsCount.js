
const stopWords = ['and', 'or', 'a', 'the', ''];
const words = ['HellO', 'h', 'And', 'heLlo', '', 'AND', 'DOG', 'oR', 'cat', 'HELLO', 'caT'];
wordsCount(words, stopWords); // [['hello', 3], ['h', 1], ['dog', 1], ['cat', 2]]

function wordsCount(arr1, arr2) {
    let mapped = new Map();
    let tempArr = [...arr1];
    let cleanArr = [];
    for (let i = 0; i < arr2.length; i += 1) {                             // TODO переписать через reduce
         cleanArr = tempArr.filter(function (item) {
            return item.toLowerCase() !== arr2[i];
        });
        tempArr = [...cleanArr];
    }
    console.log(cleanArr);
    let temp = [...cleanArr];
    console.log(temp);
    for (let i = 0; i < cleanArr.length; i += 1) {
        let counter = 0;
        for (let j = 0; j < temp.length; j += 1) {                           // TODO потерялся tempArr
            if (cleanArr[i].toLowerCase() == temp[j].toLowerCase()) {
                counter ++;
                // delete temp[j];
                temp.splice(j,1);
            }
        }
        mapped.set(cleanArr[i], counter);
    }
    console.log(mapped);
    // return mapped;
}

// function makeCounter () {
//     function counter () {
//         return counter.currentCount ++;
//     }
//     counter.currentCount = 0;
//     return counter;
// }
//
// var wordCounter = makeCounter();
// function wordsCount(arr1, arr2) {
//     let mapped = new Map();
//     let  cleanArr = [];
//     for (let i = 0; i < arr2.length; i+= 1) {
//         let cleanArr = arr1.reduce(function (acc, item) {
//             return acc.concat(arr1.filter(function (item) {
//                 return item !== arr2[i];
//             }));
//         }, []);
//     }
//     console.log(cleanArr);
//     // return mapped;
// }


// export default wordsCount;

// Воспользуйтесь тройкой map/filter/reduce.
//     Функция has типа Map проверяет наличие ключа в мапе
// Проверка должна быть регистро-независимой