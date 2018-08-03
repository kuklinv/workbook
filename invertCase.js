// замена строчных букв
const invertCase = (inputV) => {
  let resStr = '';
  let str = inputV;
  const newStr = toUpperCase(str);
  for (let i = 1; i <= length(str); i += 1) {
    if (newStr[i] !== str[i] && newStr[i] !== ' ' && newStr[i] !== ',') {
      str[i] = toUpperCase(str[i]);
      resStr += str[i];
    } else {
      resStr += str[i];
    }
  }
  return resStr;
};

export default invertCase;