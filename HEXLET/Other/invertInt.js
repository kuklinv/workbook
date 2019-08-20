const identity = str => str;
const length = str => str.length;

const reverseInt = (num1) => {
  const num = Math.abs(num1);
  const minus = -1;
  const strFromNum = String(num);
  let numNewStr = '';
  for (let i = length(strFromNum); i > 0; i -= 1) {
    numNewStr += strFromNum[i - 1];
  }
  const numNew = Number(numNewStr);
  return num1 > 0 ? numNew : numNew * minus;
};

export default reverseInt;

/* 
самый короткий вариант
 function rev_num(num) {
    return Number(num.toString().split('').reverse().join(''));
}

*/