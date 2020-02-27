function filterPersons(str) {
  let res = "";
  let ignore = "Sam";
  let arrInputStr = str.split(",");
  let filterInputArr = arrInputStr.filter(item => item !== ignore);
  res = filterInputArr.join("");
  return res;
}
