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

var array = [1, 2, 3];
const arrayToList = (array) => {
  var constructor = new Object();
    var list = {
      first:'',
      second:''
  };
  for (let index = 0; index < array.length; index++) {
    var value = array.shift();
    list.first = value;
      
  } 
    return list;
}
console.log(list);