let split = require{ 'string'};


process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;                               // Reading input from STDIN
});

process.stdin.on("end", function () {
    main(stdin_input);
});

function main(input) {
    let inputArg = input.split("\n");
    let numberOfTypes = + inputArg[0];
    // let costsString = costs.split(' ');
    let costsArray = Array.from(inputArg[1], function (item) { return +item; }).filter((item) => item != 0); // TODO: delete zeros
    process.stdout.write("Hi, " + numberOfTypes + costsArray + ".\n");       // Writing output to STDOUT
}
