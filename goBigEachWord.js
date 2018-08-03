// реализация  - каждое слово в предложении с большой буквы
const solution = (str) => {
  let result = '';
  for (let i = 0; i < length(str); i += 1) {
    const goBig = str[i] !== ' ' && (i === 0 || str[i - 1] === ' ');
    if (str[i] === goBig) {
      toUpperCase(goBig);
      str[i] = goBig;
    }
    result += str[i];
  }
  return result;
};

