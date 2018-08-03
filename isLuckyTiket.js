const length = str => str.length;
const isHappyTicket = (num) => {
  const typeNum = typeof num;
  if (typeNum === 'number') {
    num = String(num);
  }
  if (length(num) % 2 !== 0) {
    return false;
  }
  let pt1 = 0;
  let pt2 = 0;
  for (let i = 0; i < (length(num) / 2); i += 1) {
    pt1 += Number(num[i]);
  }
  for (let i = (length(num) / 2); i < length(num); i += 1) {
    pt2 += Number(num[i]);
  }
  return pt1 === pt2 ? true: false;
};
isHappyTicket('060006');