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

function swap(map, key) {
  for (let item of Object.keys(map)) {
    if (map[item] == key) {
      console.log(map[item]);
      console.log([key]);
      map.set('key', item);
      map.delete(map[item]);
    }
  }
  return (console.log(map));
}

console.log(swap({ "user": "Tom", "confirm": "isConfirmed" }, confirm)); // "isConfirmed"
// console.log(swap({ "user": "Tom", "confirm": "isConfirmed" }, login)); // false
