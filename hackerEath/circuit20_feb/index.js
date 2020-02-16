process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
    let buffer = Buffer.from(input);
    stdin_input += buffer.toString();                               // Reading input from STDIN
});

process.stdin.on("end", function () {
    main(stdin_input);
});

function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
}

function main(input) {
    let inputArg = input.split("\n");
    let numberOfTypes = + inputArg[0];
    let costsArray = Array.from(inputArg[1], function (item) { return +item; }).filter((item) => item !== 0);
    ////////////////////
    let availableAmount = [];
    console.log(costsArray);
    let maxCost = getMaxOfArray(costsArray);
    for (let amount = 1; amount <= maxCost / 2; amount++) {
        let doubleAmount = amount * 2;
        for (let i = 0; i < numberOfTypes; i++) {
            console.log(costsArray[i]);
            console.log(amount);
            console.log(doubleAmount);
            if (costsArray[i] === amount && doubleAmount % 2 === 0 || costsArray[i] === doubleAmount && doubleAmount % 2 === 0) {
                availableAmount.push(doubleAmount);
            }
            console.log(availableAmount);
        }
    }
    counterOfAmount = (availableAmount.length).toString();
    // process.stdout.write(`${counterOfAmount}`);
    process.stdout.write(counterOfAmount);
}
