const sequenceSum = (begin, end) => {
if (begin > end) {
    return NaN;
   }
if (begin === end) {
    return end;
   }
else {
    return begin + sequenceSum(begin + 1, end);
   }
};
