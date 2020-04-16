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
    console.log(s);
    let sumAlc = 0;
    let glassWord;
    let sArr = s.split(',');
    let noSpacesSArr = [];
    sArr.forEach((item) => noSpacesSArr.push(item.trim()));
    let subArrayforRootArr = [];
    noSpacesSArr.forEach(function (item) {
        if (item.indexOf('and') + 1) {
            let tempSubArray = item.split('and');
            tempSubArray.forEach((item) => subArrayforRootArr.push(item.trim()));
            noSpacesSArr.splice(noSpacesSArr.indexOf(item), 1);
        }
        return subArrayforRootArr;
    });
    let rootArr = noSpacesSArr.concat(subArrayforRootArr);
    let resArrr = rootArr.map(item => item.split(' '));

    resArrr.forEach(function (item) {
        if (!item.some(item => item === 'water')) {
            sumAlc += +item[0];
        }
    });

    if (sumAlc !== 1) {
        glassWord = 'glasses';
    } else {
        glassWord = 'glass';
    }
    return `${sumAlc} ${glassWord} of water`;
}

hydrate('1 shot, 5 beers, 2 shots, 1 glass of wine and 1 beer, 1 beer');
// function hydrateFirstVeersion(s) {
//     // let separator = new RegExp(/,|and /gm); //
//     let separator = new RegExp(/\s|and /gm);
//     let sumAlc = 0;
//     let glassWord;
//     let sArr = s.split(',');
//     let noSpacesSArr = [];
//     sArr.forEach((item) => noSpacesSArr.push(item.trim()));
//     console.log(noSpacesSArr);
//     // let routArr = noSpacesSArr.map(item => item.split(' ')); TODO: jr but need separator ',' or 'and'
//     let routArr = noSpacesSArr.map(item => item.split(separator));
//     routArr.forEach(function (item) {
//         if (!item.some(item => item === 'water')) {
//             sumAlc += +item[0];
//         }
//     });
//     console.log(routArr);
//     // routArr.forEach(function (item) {
//     //         sumAlc += +item[0];
//     // });
//     // console.log(`${sumAlc} glasses of water`);
//     if (sumAlc !== 1) {
//         glassWord = 'glasses';
//     } else {
//         glassWord = 'glass';
//     }
//     // return `${sumAlc} ${glassWord} of water`;
//     console.log(`${sumAlc} ${glassWord} of water`);
// }


// "10 glasses of water"

////beginner
// function check(a, x) {
//     return a.some(item =>  item === x);
// }
//
// console.log(check([80, 117, 115, 104, 45, 85, 112, 115], 45)); // true