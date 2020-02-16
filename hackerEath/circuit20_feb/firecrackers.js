var typesNum = '3';
var costs = '2 5 8';
var amountsNumber = function (n, costs) {
    var numberOfTypes = +n;
    var costsString = costs.split(' ');
    var costsArray = Array.from(costsString, function (item) { return +item; });
    console.log(numberOfTypes);
    console.log(costsArray);
};
amountsNumber(typesNum, costs);
