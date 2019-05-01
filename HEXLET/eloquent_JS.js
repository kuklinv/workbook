/////// exersises from boock "eloquent Java Script"
//// structure of data. array and list and object
const range = (start, finish, step = 1) => {
    var arr = [];
    if (step > 0) {
        for (let index = start; index <= finish; index += step) {
            arr.push(index);
        }
    } else {
        for (let index = finish; index >= start; index += step) {
            arr.push(index);
        }
    }
    return arr;
}
console.log(range(1, 10));

////////////////////////

const summ = (arr) => {
    var s = 0;
    for (let index = 0; index < arr.length; index++) {
        s = s + arr[index];
    }
    return s;
}
console.log(summ(range(1, 10)));

//////////////////////// array

var arr1 = ['A', 'B', 'C', 'D'];

const reversArray = (array) => {
    return array.reverse();
}

const reversArrayInPlase = (array) => {
    const arrIP = [];
    for (let index = array.length - 1; index >= 0; index -= 1) {
        arrIP.push(array[index]);
    }
    return arrIP;
}

const a1 = reversArray(arr1);
const a2 = reversArrayInPlase(arr1);
console.log(a1);
console.log(a2);

///////////////////////////// list constructor
/*
*****************************************************

!!! ключевое. это будет потом нужно в DOM и при обходах дереьев!!! основное как и в листе - вызываем функцию чйалда  и потом вызываем фунцию для
чайлда и это идет в глубь..... 

Напишите функцию arrayToList, которая строит такую
структуру, получая в качестве аргумента [1, 2, 3], а также
функцию listToArray, которая создаёт массив из списка.
Также напишите вспомогательную функцию prepend,
которая получает элемент и создаёт новый список, где
этот элемент добавлен спереди к первоначальному
списку, и функцию nth, которая в качестве аргументов
принимает список и число, а возвращает элемент на
заданной позиции в списке или же undefined в случае
отсутствия такого элемента.
Если ваша версия nth не рекурсивна, тогда напишите её
рекурсивную версию.

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
*/

// создаю последнюю пару списка.... не лучший вариант...
var array = [1,2,3];
var temp = array.pop();
function lastList (array) {
  this.value = temp;
  this.link = 'null'
}

var test = new lastList;
console.log(test);

//  определение листа/ хорошее представление для понимания
var list = { value: 1 };
list.next = { value: 2 };
list.next.next = { value: 3 };
list.next.next.next = { value: 4 };
console.log(list);

//альтернативное определение листа:
var list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};
console.log(list);
// рекурсивная печать листа
function printList(list) {

    alert(list.value); // (1)

    if (list.next) {
        printList(list.next); // (2)
    }

}

printList(list);


//////////////////// основные попытки далее
var array = [1, 2, 3]; // start array

function lastList(lastFirst) { // constructor last listing
    this.value = lastFirst;
    this.link = null;
};

var testValue1 = array.pop();
var test1 = new lastList(testValue1);
//1
console.log(test1);

function prepend(one, link) { // add new value of list to last
    this.value = one;
    this.link = link;
};

var testValue2 = array.pop();
var test2 = new prepend(testValue2, new lastList(testValue1));
//2
console.log(test2);

var testValue3 = array.pop();
var test3 = new prepend(testValue3, new prepend(test2, test1));
//3
console.log(test3);
// дальше пробую создать конструктор с входом первого элемента и списком в качестве второго.
// но это нельзя вызвать как конструктор, типа var n = new constr (); конструктор пишеться через function void;
const constr = (first, second) => {
    this.value = first;
    this.link = second;
};
  
const arrayToList = (array) => {
    var last = array[array.length - 2];
    if (array.length == 1) {
        return constr(array.pop(), null);
    }
    return constr(last, arrayToList(array.slice(0, last)));
}
  
var list = {};
list = arrayToList(array);
console.log(list);

// и еще попытка
var array = [1, 2, 3];
function arrayToList (array) {
  if (array.length = 1) {
    list.value = array[array.length - 1]
    list.link = 'null';
    } 
  var list = new Object(arrayToList(array.pop()));
  return list;
} 

// очередная идея. 24.04.19/ пишу функцию псевдо конструктор котоая возвращает обьект на основе входящего
//первого аргумента и второго. первым передаю текущий первый в массиве индекс, второе - обрезанный без первого 
//массив + 1, т.е. второго и третьего. это копия. исходный не должен по задумке измениться
var testArray = [1, 2, 3, 4, 5, 6];
// тот самый псевдо
const listMaker = (first, second) => {
    value: first;
    link: second
}

function arrayToList (array) {
  var list = {};
  while (array.length > 2) {
    var first = array[0];
    var second = array.slice(1, 3);
    list = listMaker (first, second);
}
return list;
}
console.log(arrayToList(testArray));

// не срабатывает... циклиться на одном и том же вводе в листмейкер (т.е. внутри аррейтолист отрабатывает и выдает на вход нулевой и 
// второй третий обрезанный, потом не доходит до записи в лист и идет снова к листмейкеру с теми же входными данными
// истина гдето рядом.....)





