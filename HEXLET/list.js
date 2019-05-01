// условия задания
/* Все создаваемые функции, в рамках этого задания, должны быть реализованы независимо друг от друга, то есть их нельзя использовать для реализации друг друга.
list.js
Реализуйте и экспортируйте функцию has, которая проверяет, является ли переданное значение элементом списка.
const numbers = l(3, 4, 5, 8);
has(numbers, 8); // true
has(numbers, 0); // false
Реализуйте и экспортируйте функцию reverse, которая переворачивает список, используя итеративный процесс.
const numbers = l(3, 4, 5);
reverse(numbers); // (5, 4, 3)
Реализуйте и экспортируйте функцию concat, которая соединяет два списка, используя рекурсивный процесс (попробуйте сначала представить, как работала бы функция copy, которая принимает на вход список и возвращает его копию).
const numbers = l(3, 4, 5, 8);
const numbers2 = l(3, 2, 9);
concat(numbers, numbers2); // (3, 4, 5, 8, 3, 2, 9)
*/


const has = (numbers, num) => {
  if (isEmpty(numbers) === true) return false; // если список пуст
  while (numbers !== null) {                   // цикл перебираем список пока не найдем ноль в последней паре (элементе)
    if (head(numbers) === num) return true;    // проверка головы очередного элемента
	numbers = tail(numbers);                   // перемещение по связи в следующий элемент
  }
  return false;
};

const reverse = (list) => {
  
  const iter = (items, acc) => {
    if (isEmpty(items) === true) {
      return acc;
    }
    return iter(tail(items), cons(head(items), acc)); 
  }
  return iter (list, l());
};

/* 
Я вам подскажу. У вас есть список в качестве >параметра к reverse, 
создаёте внутри функцию под >реализацию итеративного процесса, 
применяете её к >этому списку и аккумулятору (пустой список). 
Далее >создавайте новый список через объединение головы с >
аккумулятором и возвращайте результат рекурсии с 
>хвостом и новым списком. Вот и весь алгоритм.

1) iter(tail(1,2,3,4), cons(head(1,2,3,4), l());
2) iter(tail(2,3,4), cons(head(2,3,4), cons(head(1,2,3,4), l()));
3) iter(tail(3,4), cons(head(3,4), cons(head(2,3,4), cons(head(1,2,3,4), l())));
4) iter(tail(4), cons(head(4),  cons(head(3,4), cons(head(2,3,4), cons(head(1,2,3,4), l()))));
*/

const concat = (list1, list2) => {
  if (isEmpty(list1)) {
    return list2;
  }  
  return cons(head(list1), concat(tail(list1), list2));
};

export { has, reverse, concat };

