const bigLettersCount = (str) => {
  // BEGIN (write your solution here)
var counter = 0;
    var strCopy = toUpperCase(str);
for (var i = 0; i < length(str); i += 1) {
    if (str[i] === strCopy[i] || str[i] === ' ') {
        counter += 1;
    }
}
return counter;
  // END
};


const compare = (first, second) => {
  const firstCount = bigLettersCount(first);
  const secondCount = bigLettersCount(second);

  // BEGIN (write your solution here)
if (firstCount > secondCount) {
return 1;
} else if (secondCount > firstCount) {
    return -1;
} else return 0;
  // END
};

const greaterThan = (first, second) =>
  compare(first, second) === 1;

const lessThan = (first, second) =>
  compare(first, second) === -1;

const isEqual = (first, second) =>
  compare(first, second) === 0;
