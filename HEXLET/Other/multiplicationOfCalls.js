// реализация мультивызова функции заданное количество раз
const apply = (num, func, arg) => {
  if (num === 0) {
    return arg;
  } else {
   	let answer = func(arg);
   	return apply (num - 1, func, answer);
   	   }
};


/*
apply(0, Math.sqrt, 4); // => 4
apply(1, Math.sqrt, 4); // => 2

// Math.sqrt(Math.sqrt(16));
apply(2, Math.sqrt, 16); // => 2
// Math.sqrt(Math.sqrt(Math.sqrt(256)));
apply(3, Math.sqrt, 256); // => 2

apply(1, v => v ** 2, 3); // => 9
apply(5, v => v + 10, 3); // => 53
*/