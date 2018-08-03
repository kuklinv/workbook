const reverse = (str) => {
  const arrStrNum = str.split('');
  arrStrNum.reverse();
  const newStr = arrStrNum.join('');
  return newStr;
};

/*
const reverseString = (str) => {
  const length = str.length;
  if (length === 0) {
    return str;
  }
  return str[length - 1] + reverseString(str.substr(0, length - 1));
};

export default reverseString;
}



*/