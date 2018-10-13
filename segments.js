const makeSegment = (point1, point2) => cons(point1, point2);
const startSegment = (segment) => car(segment);
const endSegment = (segment) => cdr(segment);
const segmentToString = (segment) => '[' + pointToString(startSegment(segment)) + ', ' + pointToString(endSegment(segment)) + ']';
const midpointSegment = (segment) => cons((car(startSegment(segment)) + car(endSegment(segment))) / 2, (cdr(startSegment(segment)) + cdr(endSegment(segment))) / 2);

export { makeSegment, startSegment, endSegment, segmentToString, midpointSegment };
