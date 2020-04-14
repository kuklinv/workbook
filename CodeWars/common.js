// function paperwork(n, m) {
// //     if (n < 0 || m < 0) return 0;
// // else return n * m;
//     return n < 0 || m < 0 ? 0 : n * m;
// }
//
// console.log(paperwork(5, 5));

/*

// next

Input 1:
"1 shot, 5 beers, 2 shots, 1 glass of wine, 1 beer"

Output 1:
"10 glasses of water"
*/


function hydrate(s) {
    let sumAlc = 0;
    let sArr = s.split(',');
    // console.log(sArr);
    let routArr = sArr.map(item => item.split(' '))
    console.log(routArr);
    console.log(`${sumAlc} glasses of water`);
}

hydrate('1 shot, 5 beers, 2 shots, 1 glass of wine, 1 beer');