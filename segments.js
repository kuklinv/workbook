const makeSegments = (point1, point2) => {
    var x1 = car(point1);
    var y1 = cdr(point1);
    var x2 = car(point2);
    var y2 = cdr(point2);
    return cons(cons(x1, y1), cons(x2, y2));
};

const startSegment = (segment) => {
    return point1;
};

const endSegment = (segment) => {
    return point2;
};

const segmentToString = (segment) => {
    return pointToString;
};

const midpointSegment = (segment) = {
    return point3;
};
