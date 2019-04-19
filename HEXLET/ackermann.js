// реализация классической функции Аккермана для неотричательных целых чисел
const ackermann = (m, n) => {
  if (m === 0) {
    return n + 1;
  } else if (m > 0 && n === 0) {
    return ackermann(m - 1, 1);
  } else if (m > 0 && n > 0) {
  return ackermann(m - 1, ackermann(m, n - 1));
  }
};
export default ackermann;

//ackermann(0, 0); // 1
//ackermann(2, 1); // 5
//ackermann(2, 3); // 9

