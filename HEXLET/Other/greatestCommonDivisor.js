// const smallestDivisor = (num) => {
//     if (num == 1) return 1;
//     const iter = (num, acc) => {
//         if (num % acc == 0) {
//             return acc;
//         }
//         return iter(num, acc + 1);
//     }
//     return iter(num, 2);
// }
//
// export default smallestDivisor;
//
// Test.assertEquals(mygcd(30,12),6)
// Test.assertEquals(mygcd(8,9),1)
// Test.assertEquals(mygcd(1,1),1)

const gcd = (num1, num2) => {
    if (num1 === 1 && num2 === 1) return 1;
    let acc = Math.max(num1, num2);
    const iter = (num1, num2, acc) => {
      if (num1 % acc === 0 && num2 % acc === 0) {
          return acc;
      }
      return iter (num1, num2, acc - 1);
    };
    return iter(num1, num2, acc);
};

gcd(30,12); //,6)
gcd(8,9); //,1)
gcd(1,1); //,1)