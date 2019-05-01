// реализация  - каждое слово в предложении с большой буквы
const solution = (str) => {
  let result = '';
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] !== ' ' && (i === 0 || str[i - 1] === ' ')) {
      result += str[i].toUpperCase();
    } else {
    result += str[i];
    }
  }
  return result;
};
