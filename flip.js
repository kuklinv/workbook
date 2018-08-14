/* единственная цель этой функции — это преобразовать другую функцию так,
 чтобы порядок её аргументов был обратным.
 Данная версия flip работает только с функциями от двух аргументов.
// subtraction
const sub = (a, b) => a - b;
const reverseSub = flip(sub);

sub(5, 3); // 2
reverseSub(5, 3); // -2

// exponentiation
const wop = flip(Math.pow);

Math.pow(1, 2); // 1
wop(1, 2); // 2

Math.pow(3, 2); // 9
wop(3, 2); // 8
*/
const flip = f => (a, b) => f(b, a);
export default flip;
