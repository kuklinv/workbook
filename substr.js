// реализация функции возврата подстроки по условиям. вход - строка, индекес символа старта и длина возвращаемой подстроки
const getLength = str => str.length;
const substr = (str, startIndex = 0, strLength = getLength(str)) => {
  let dlinaStroky = strLength;
  let Index = startIndex;
  let result = '';
  if (dlinaStroky < 0) {
    dlinaStroky = 1;                                         // минусовая длина  равна 1
  }
  if (Index < 0) {                                           // минусовой индекс равен 0
    Index = 0;
  }
  if (Index > getLength(str) - 1 || strLength === 0) {       // минусовая длина || индекс длиней = пустая строка
    return '';
  }
  if (dlinaStroky > getLength(str)) {
    dlinaStroky = getLength(str);
  }
  if (Index + dlinaStroky > getLength(str)) {
    dlinaStroky = dlinaStroky - Index;
  }
  for (let i = Index; i < Index + dlinaStroky; i += 1) {
    result += str[i];
  }
  return result;
};

export default substr;

/* tests
substr('abba', -1, 100) // => abba
substr('abba', 4, -10); // => ''
substr('');     // => ''
substr('abba'); // => abba
substr('abba', 0, 1);    // => a
substr('abba', 1, 2);    // => bb
substr('abba', -10, 2);  // => ab
substr('abba', -1, 100); // => abba
substr('abba', -1, -1);  // => a
substr('abba', 1, -10);  // => b
substr('abba', 1, 10);   // => bba
substr('abba', 1, 0);    // => ''
substr('abba', 100, 3);  // => ''
*/