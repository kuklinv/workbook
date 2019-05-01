// реализация проверки баланса круглых скобок через счетчик
const length = str => str.length;
const substr = (str, start, size) => str.substr(start, size);
const areBracketsBalanced = (input) => {
  let counter = 0;
  const strt = 0;
  const fin = length(input);
  if (input === '') {
  	return true;
  }
  if (fin % 2 !== 0) {
    return false;
  }
  if (fin < 3 && substr(input, strt, 1) !== substr(input, fin - 1, 1)) {
    return true;
  }
  for (let i = 0; i <= fin; i += 1) {
    if (input[i] === '(') {
      counter += 1;
    } else if (input[i] === ')') {
      counter -= 1;
    }
  }
  return counter < 0 ? false : true;
};

export default areBracketsBalanced;

//areBracketsBalanced('(())');  // true
//areBracketsBalanced('((())'); // false
//areBracketsBalanced('(()((((())))))'); // true
//areBracketsBalanced('()'); // true
//areBracketsBalanced('(('); // false