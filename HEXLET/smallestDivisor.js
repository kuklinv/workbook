<<<<<<< HEAD
const smallestDivisor = (num) => {
const iter = (counter, acc) => {
if (counter === 1) {
 return acc;
 }
 return iter 
 }

};
=======
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
>>>>>>> 5d65424786c61b48515a0c8a5ddbea6162211331
