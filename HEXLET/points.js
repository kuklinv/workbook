// const point = makePoint(a, b);

const getQuadrant = (point) => {
var x = getX(point);
var y = getY(point);
    if (x > 0 && y > 0) {
     return 1;
    } else if (x > 0 && y < 0) {
     return 4;
    } else if (x < 0 && y > 0) {
     return 2;
    } else if (x < 0 && y < 0) {
     return 3;
    } else return null;
};

const getSymmetricalPoint = (point) => {
var x = getX(point);
    x = - x;
var y = getY(point);
    y = - y;
    return makePoint(x, y);
};

const calculateDistance = (point1, point2) => {
var x1 = getX(point1);
    var y1 = getY(point1);
    var x2 = getX(point2);
    var y2 = getY(point2);
    var d = (x2 - x1)^2 + (y2 - y1)^2;
    var d2 = Math.sqrt(d);
    return d2;
};
export { getQuadrant, getSymmetricalPoint, calculateDistance };

