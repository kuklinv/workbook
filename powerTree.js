const powerTree = num => {
  while (num >= 1) {
    if (num === 1) {
      return 1;
    } else {
      num = powerTree(num / 3);
    }
  }
  return 0;
};
const power = (n) => (powerTree(n) === 1) ? true : false;