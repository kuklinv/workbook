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

function findMidlle(arr) {
  //Ваш код
}

findMidlle(["a", "b", "c"]); // b
findMidlle(["1", "2", "3", "4"]); //2
findMidlle([]); // null
findMidlle(["a", "b", "c", "d", "e"]); //c
findMidlle(["a", "b", "c", null, null]); // b
