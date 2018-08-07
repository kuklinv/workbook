// принимает число и возвращает true, если оно совершенное, и false — в ином случае.
const isPerfect = num => {
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      var delitel = i;
      var sumDelitel += delitel;
    }
  }
return (sumDelitel === num) ? true: false;
};