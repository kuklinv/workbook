// проверка сбалансированности круглых скобок
const length = str => str.length;
const substr = (str, start, size) => str.substr(start, size);

const areBracketsBalanced = (input) => {
  const strt = 0;
  const fin = length(input);
  if (fin % 2 !== 0) {
    return false;
  }
  if (fin < 3 && substr(input, strt, 1) !== substr(input, fin - 1, 1)) {
    return true;
  }
  if (substr(input, strt, 1) === substr(input, fin - 1, 1)) {
    return false;
  }
  const result = areBracketsBalanced(substr(input, strt + 1, fin - 2));
  return result;
};

export default areBracketsBalanced;

//areBracketsBalanced('(())');  // true
//areBracketsBalanced('((())'); // false
//areBracketsBalanced('(()((((())))))'); // true
//areBracketsBalanced('()'); // true