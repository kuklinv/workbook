const stopWords = ['and', 'or', 'a', 'the', ''];
const words = ['HellO', 'h', 'And', 'heLlo', '', 'AND', 'DOG', 'oR', 'cat', 'HELLO', 'caT'];
wordsCount(words, stopWords); // [['hello', 3], ['h', 1], ['dog', 1], ['cat', 2]]

function wordsCount(arr1, arr2) {
    let mapped = new Map();

    return mapped;
}



// export default wordsCount;

// Воспользуйтесь тройкой map/filter/reduce.
//     Функция has типа Map проверяет наличие ключа в мапе
// Проверка должна быть регистро-независимой