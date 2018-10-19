const add = (num) => {
  const numToStr = String(num);
  let result = 0;
  for (let i = 0; i < numToStr.length; i += 1) {
    result += Number(numToStr[i]);
  }
  return result;
};

const addDigits = (num) => {
  if (add(num) < 10) {
    return add(num);
  }
  return addDigits(add(num));
};