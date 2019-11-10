// const {sum} = require('lodash').sum;
//
// function average(...arg) {
//     if (arg.length === 0) return null;
//     return sum(arg)/(arg.length);
// }

const { uniq } = require ('lodash').uniq;

function union(...arrays) {
  let result = [];
    for (let arr in arrays) {
      result = result.concat(arr);
  }
    return uniq(result);
}
export default union;
