

const amountsNumber = (n: string, costs: string): any => {
    let numberOfTypes = + n;
    let costsString: string[] = costs.split(' ');
    let costsArray: number[] = costsString.map((item: string) => + item);

}

let result = amountsNumber(typesNum, costs);
console.log(result);

amountsNumber(STDIN);
