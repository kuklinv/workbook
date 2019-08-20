// принимает число и возвращает true, если оно совершенное, и false — в ином случае.
const isPerfect = num => {
  let sumDelitel = 0;
  for (let i = 1; i < num; i += 1) {
    if (num % i === 0) {
      let delitel = i;
      sumDelitel = sumDelitel + delitel;
    }
  }
  return (sumDelitel === num && num !== 0) ? true: false;
};
isPerfect(6);