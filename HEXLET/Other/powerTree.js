const powerTree = num => {
  while (num >= 1) {
    if (num === 1) {
      return 1;
    } 
    num = powerTree(num / 3);
  }
  return 0;
};
const power = (n) => (powerTree(n) === 1) ? true : false;
//export default power;
//powerTree(3);
//powerTree(1); // true (3^0)
//powerTree(2); // false
power(9); // true (3^2)