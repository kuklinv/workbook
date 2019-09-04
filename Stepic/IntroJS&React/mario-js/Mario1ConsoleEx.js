//printPyramid(5);
// only console out
const printPyramid = (height) => {
    let space = height - 1;
    for (let i = 2; i < height + 2; i++) {
        console.log((" ").repeat(space--) + ("#").repeat(i));
    }
}