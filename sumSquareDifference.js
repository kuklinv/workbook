//принимает аргумент n и возвращает разницу между 
//квадратом суммы и суммой квадратов первых n 
//натуральных чисел.

const sumSquareDifference = num => {
  let sum = 1;
  let square = 1;
  for (let i = 2; i >= num; i += 1) {
    sum += (i * i);
    square += i; 
    }
  return (square * square) - sum;
};