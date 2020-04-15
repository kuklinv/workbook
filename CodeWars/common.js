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

//  named =>  Responsible Drinking
// TODO: i'v not right logic its may be
//  '1 beer
//   2 glasses of wine and 1 shot'

function hydrate(s) {
    let sumAlc = 0;
    let glassWord;
    let sArr = s.split(',');
    let noSpacesSArr = [];
    sArr.forEach((item) => noSpacesSArr.push(item.trim()));
    let routArr = noSpacesSArr.map(item => item.split(' '))
    // routArr.forEach(function (item) {
    //   if(!item.some(item => item === 'water')) {
    //       sumAlc += +item[0];
    //   }
    // });
    routArr.forEach(function (item) {
            sumAlc += +item[0];
    });
    // console.log(`${sumAlc} glasses of water`);
    if(sumAlc !== 1) {
        glassWord = 'glasses';
    } else {
        glassWord = 'glass';
    }
    return `${sumAlc} ${glassWord} of water`;
}

hydrate('1 shot, 5 beers, 2 shots, 1 glass of wine, 1 beer');
// "10 glasses of water"

////beginner
// function check(a, x) {
//     return a.some(item =>  item === x);
// }
//
// console.log(check([80, 117, 115, 104, 45, 85, 112, 115], 45)); // true