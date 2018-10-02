// используем итеративный процесс
const smallestDivisor = (num) => {
    if (num === 1) {
        return num;
    }
    const iter = (counter, smDivisor) => {

        if (counter === 1 && smDivisor === num + 1) {
            return (smDivisor - 1);
        }
        if (num % smDivisor === 0) {
            return smDivisor;
        }
        return iter (counter - 1, smDivisor + 1);
    };
    return iter(num, 2);
};
smallestDivisor(15);
