// last iterativ version. 04.2019
// итератив внутри нужен чтобы организовать рекурсивный итеративный процесс сначала пройдя граничные условия.
// вводим аккумулятор - в рекурсивном процессе аккумулятор - сама переменная по сути, тут дополнительный
// на него делим вход и проверяем. условие выхода когда аккумулятор становиться равным входу
// дьявол в вызове итератива самим себя и потом!!!! вызов итератива из основно йфункции
const smallestDivisor = (num) => {
    if (num == 1) return 1;
    const iter = (num, acc) => {
        if (num % acc == 0) {
            return acc;
        }
        return iter(num, acc + 1);
    }
    return iter(num, 2);
}

export default smallestDivisor;

// императивная версия дивизора. без рекурсии, цикл и переменные

const smallestDivisor = (num) => {
    if (num < 1) {
        return NaN;
    }
    if (num === 1) {
        return num;
    }
    var smDivisor = 2;
    while (smDivisor <= num) {
        if (num % smDivisor === 0 || smDivisor === num) {
            return smDivisor;
        } else smDivisor += 1;
    }
};

// предыдущая версия

const smallestDivisor = (num) => {
    if (num === 1) {
        return num;
    }
    const iter = (counter, smDivisor) => {

        if (counter === 1 && smDivisor === num + 1) {
            return (smDivisor - 1); // зачем так сделал не понимаю видимо в процессе написания намудрил и потом выкрутился
        }
        if (num % smDivisor === 0) {
            return smDivisor;
        }
        return iter(counter - 1, smDivisor + 1);
    };
    return iter(num, 2);
};
smallestDivisor(15);