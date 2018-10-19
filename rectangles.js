const makeRectangle = (startPoint, rectWidth, rectHeight) => {
  return cons(startPoint, cons(rectWidth, rectHeight));
};

const getStartPoint = (rectangle) => car(rectangle);

const getWidth = (rectangle) => car(cdr(rectangle));

const getHeight = (rectangle) => cdr(cdr(rectangle));

const square = (rectangle) => {
	return getWidth(rectangle) * getHeight(rectangle); 
};

const perimeter = (rectangle) => {
  return (getHeight(rectangle) + getWidth(rectangle)) * 2; 
};

const containsTheOrigin = (rectangle) => {
  var point1 = getStartPoint(rectangle);
  if (getQuadrant(point1) === 2 && getHeight(rectangle) > getY(point1) && getWidth(rectangle) > getX(point1)) return true;
   else return false; 
};

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

export { makeRectangle, getStartPoint, getWidth, getHeight, square, perimeter, containsTheOrigin };