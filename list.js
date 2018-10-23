// условия задания
/* Все создаваемые функции, в рамках этого задания, должны быть реализованы независимо друг от друга, то есть их нельзя использовать для реализации друг друга.

list.js
Реализуйте и экспортируйте функцию has, которая проверяет, является ли переданное значение элементом списка.

const numbers = l(3, 4, 5, 8);
has(numbers, 8); // true
has(numbers, 0); // false
Реализуйте и экспортируйте функцию reverse, которая переворачивает список, используя итеративный процесс.

const numbers = l(3, 4, 5);
reverse(numbers); // (5, 4, 3)
Реализуйте и экспортируйте функцию concat, которая соединяет два списка, используя рекурсивный процесс (попробуйте сначала представить, как работала бы функция copy, которая принимает на вход список и возвращает его копию).

const numbers = l(3, 4, 5, 8);
const numbers2 = l(3, 2, 9);
concat(numbers, numbers2); // (3, 4, 5, 8, 3, 2, 9)
*/


const has = (numbers, num) => {
var inputList = numbers;
var elementMember = num;
var toStrInputNumbers = toString(inputList);

//while (a !== null) {        // цикл перебоа элементов списка до его окончания (пока последняя пара)
//  return tail (a);          // не null во втором элементе
//};                           

};
const reverse = (numbers) => {

};
const copy = (numbers) => {

};
const concat = (numbers, numbers2) => {

};

export { has, reverse, concat };


//  описание модулей задачи
/* List constructor

Parameters

elements ...any
Examples

l(); // ()
l(8, 10); // (8, 10)
cons
Add element to list

Parameters

element any
list List
Examples

cons(5, l(1, 0)); // (5, 1, 0)
head
Get list's head

Parameters

list List
Examples

head(l(10, 15, 20)); // 10
tail
Get list's tail

Parameters

list List
Examples

tail(l(10, 15, 20)); // (15, 20)
isEmpty
Check if list is empty

Parameters

list List
Examples

isEmpty(l()); // true
isEmpty(l(0)); // false
isEmpty(l('a', 5)); // false
toString
Convert list to string

Parameters

list List
Examples

toString(l()); // ()
toString(l('hello', 'world')); // ('hello', 'world')
*/