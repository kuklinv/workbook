// function filterPersons(str) {
//   let res = "";
//   let ignore = "Sam";
//   let arrInputStr = str.split(",");
//   let filterInputArr = arrInputStr.filter(item => item !== ignore);
//   res = filterInputArr.join("");
//   return res;
// }

// function beginWith(str, subs) {
//   let a = "";
//   let b = "";
//   if (subs.length == 0 || subs.length > str.length) return false;
//   let subInputStr = str.substring(0, subs.length - 1);
//   a = subs.toLowerCase();
//   b = subInputStr.toLowerCase();
//   return a == b ? true : false;
// }
// console.log(beginWith("JavScript", "java"));

// let a = "Java";
// let b = "JavaScript";
// console.log(a == b ? true : false);

// function swap(map, key) {
//   if (map.has(key)) {
//     let tempKey = map.get(key);
//     map.delete(key);
//     map.set(tempKey, key);
//     return map;
//   } else return false;
// }

// swap({ user: "Tom", confirm: "isConfirmed" }, "confirm"); // "isConfirmed"
// // console.log(swap({ "user": "Tom", "confirm": "isConfirmed" }, login)); // false

// Если коротко то вот, что нужно сделать: пройтись по переданной map в for-of, создать локальный set
//  в который внутри этого цикла, по условию - является ли значение ключа массивом, вы будите добавлять
//  все значения этого массива, а затем это set вы можете присваивать ключу в мапе(внутри этого условия).
//  После этого цикла вам нужно сконкатенировать значения в одну строку и вывести ее.

// function modifyMap(map) {
//   let resStr = "";
//   for (let entry in map) {
//     // console.log(entry);
//     // console.log(map[entry]);
//     if (typeof map[entry] == "object") {
//       let localSet = new Set(map[entry]);
//       // map.set(entry, localSet);
//       resStr += `${entry}:${localSet};`;
//     } else {
//       map.delete(entry);
//     }
//   }
//   console.log(resStr);
// }
// function modifyMap(map) {
//   let resStr = "";
//   for (let entry in map) {
//     if (typeof map[entry] == "object") {
//       let localSet = new Set(map[entry]);
//       resStr += entry + ":" + [...localSet].join("") + ";";
//     } else map.delete(entry);
//   }
//   console.log(resStr);
// }

// modifyMap({ log14: [1, 2, 3, 3, 2, 1], log15: "none data", log16: ["s", "S"] }); //log14:123;log16:sS;
// modifyMap({ log: [1, 1, 1] }); //log:1;

// const data = {
//   Day: "Monday",
//   Month: "May",
//   Date: 06,
//   FullYear: 2019
// };
// // Mon May 06 2019

// function getWeekDay(date) {
//   const weakSet = [
//     "Воскресенье",
//     "Понедельник",
//     "Вторник",
//     "Среда",
//     "Четверг",
//     "Пятница",
//     "Суббота"
//   ];
//   let day = date.getDay();
//   console.log(weakSet[day]);
// }

// getWeekDay(data);

// function findMidlle(arr) {
//   let i;
//   let arrF = arr.filter(item => item !== null);
//   if (arrF.length % 2 === 0) {
//     i = arrF.length / 2 - 1;
//   } else {
//     i = Math.floor(arrF.length / 2);
//   }
//   return arr.length == 0 ? null : arrF[i];
//   //Ваш код
// }

// findMidlle(["a", "b", "c"]); // b
// findMidlle(["1", "2", "3", "4"]); //2
// findMidlle([]); // null
// findMidlle(["a", "b", "c", "d", "e"]); //c
// findMidlle(["a", "b", "c", null, null]); // b

///// OOP
/*
На вход вашей функции подаётся 3 аргумента, первым аргументом utilObj является объект с набором методов,
 вторым (targetObj) - другой объект, и третьим параметр примитивного типа param.
Ваша задача - вызвать каждый метод(функцию) первого объекта по порядку с контекстом второго объекта
и параметром param.
*Чтобы всё корректно работало не используйте apply! Возможны ошибки из-за того, что у массива
есть метод apply
*Подсказка: понадобится цикл и typeof
*/

// function func(utilObj,targetObj,param){
//   for(let item in utilObj){
//     if(typeof item == 'function'){
//       utilObj[item].call(targetObj, param);
//     }
//   }
//     // utilObj[Object.getOwnPropertyNames(utilObj)].call(targetObj, param);
// }

// func(obj1;{"name":"Tom","id":"3"};ID); //Tom ID:3

function transform(arr) {
  let resObj = {};
  arr.forEach(function(objItem) {
    Object.defineProperty(resObj, objItem.name, {
      value: objItem.value
    });
  });
  console.log(resObj);
  // return resObj;
}

transform([
  { name: "width", value: 10 },
  { name: "height", value: 20 }
]); //{"width":10,"height":20}
transform([
  { name: "color", value: "#f0f0f0" },
  { name: "width", value: "100%" }
]); //{"color":"#f0f0f0","width":"100%"}
transform([
  { name: "color", value: "#f0f0f0" },
  { name: "width", value: "100%" },
  { name: "opacity", value: 1 }
]); //{"color":"#f0f0f0","width":"100%","opacity":1}

// Object.assing(targetObj, srcObj1, srcObj2,...,scrObjN)
