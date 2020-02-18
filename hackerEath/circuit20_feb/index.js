
/////////////////////////////////////////////// Permutation of a query 1-d stage
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
    let buffer = Buffer.from(input);
    stdin_input += buffer.toString();
});

process.stdin.on("end", function () {
    main(stdin_input);
});

function dist(a, b) {
    return ((Math.sin(a + b)) * (Math.cos(a - b)));
}

function main(input) {
    let inputArg = input.split("\n");
    let numberOfPoint = + inputArg[0];
    let pointArray = Array.from(inputArg[1], function (item) { return +item; }).filter((item) => item !== 0);



    process.stdout.write(`${}`);
}

/////////////////////////////////////////////// Sum of the distance 2-d stage

process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
    let buffer = Buffer.from(input);
    stdin_input += buffer.toString();                               // Reading input from STDIN
});

process.stdin.on("end", function () {
    main(stdin_input);
});

function dist(a, b) {
    return ((Math.sin(a + b)) * (Math.cos(a - b)));
}

function main(input) {
    let inputArg = input.split("\n");
    let numberOfPoint = + inputArg[0];
    let pointArray = Array.from(inputArg[1], function (item) { return +item; }).filter((item) => item !== 0);
    // let dist1, dist2, distTemp
    let distArr = [];
    for (let i = 0; i < numberOfPoint.length - 1; i++) {
        let distTemp = dist(pointArray[i], pointArray[i + 1]);
        console.log(distTemp)
        distArr.push(distTemp);
    }
    let distance = distArr.reduce(function (item, acc) {
        return item + acc
    }, 0);
    // let distR = [];
    // distR[0] = dist(pointArray[0], pointArray[1]);
    // let distance = distR[0];
    // for (let i = 1; i < numberOfPoint.length - 1; i++) {
    //     distR[i] = dist(pointArray[0], pointArray[i + 1]);
    //     if (distR[0] > distR[i]) {
    //         distance += dist(pointArray[i], pointArray[i + 1]);
    //     }
    // }

    let res = distance.toFixed(2);
    process.stdout.write(`${res}`);
}

// TODO: input =>
// 3
// 5 2 7
//dist(5, 2)  + dist(5, 7) + dist(2, 7) = -0.31

/////////////////////////////////////////////// firecrackets task 1-st stage

// // const _ = require('lodash');
// // import { _ } from 'lodash';

// process.stdin.setEncoding("utf-8");
// var stdin_input = "";

// process.stdin.on("data", function (input) {
//     let buffer = Buffer.from(input);
//     stdin_input += buffer.toString();                               // Reading input from STDIN
// });

// process.stdin.on("end", function () {
//     main(stdin_input);
// });

// function getMaxOfArray(numArray) {
//     return Math.max.apply(null, numArray);
// }

// function main(input) {
//     let inputArg = input.split("\n");
//     let numberOfTypes = + inputArg[0];
//     let costsArray = Array.from(inputArg[1], function (item) { return +item; }).filter((item) => item !== 0);
//     ////////////////////
//     let availableAmount = [];
//     // console.log(costsArray);
//     let maxCost = getMaxOfArray(costsArray);
//     for (let amount = 1; amount <= maxCost / 2; amount++) {
//         let doubleAmount = amount * 2;
//         for (let i = 0; i < numberOfTypes; i++) {
//             // console.log(costsArray[i]);
//             // console.log(amount);
//             // console.log(doubleAmount);
//             if (costsArray[i] === amount && doubleAmount % 2 === 0 || costsArray[i] === doubleAmount && doubleAmount % 2 === 0) {
//                 availableAmount.push(doubleAmount);
//             }
//             // console.log(availableAmount);
//         }
//     }

//     // counterOfAmount = (_.uniq(availableAmount)).length;
//     // counterOfAmount = (availableAmount.length).toString();
//     // process.stdout.write(counterOfAmount);
//     let filteredUniques = new List(availableAmount);
//     counterOfAmount = filteredUniques.length;
//     process.stdout.write(`${counterOfAmount}`);

// }
