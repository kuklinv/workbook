const reversePair = (pair) => {
var x = car(pair);
var y = cdr(pair);
    return cons(y, x);
};

const sumOfPairs = (pair1, pair2) => {
var x1 = car(pair1);
var y1 = cdr(pair1);
var x2 = car(pair2);
var y2 = cdr(pair2);
var x3 = x1 + x2;
var y3 = y1 + y2;
    return cons(x3, y3);

};

const findPrimitiveBox = (box) => {
  var x = car(box);
  var y = cdr(box);
  if(!isPair(x) && !isPair(y)) {
     return box;
  } else if (isPair(x)) {
    return findPrimitiveBox(x);
  } else {
    return findPrimitiveBox(y);
  }
};
