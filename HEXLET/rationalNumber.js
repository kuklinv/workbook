const make = (numer, denom) => cons(numer, denom);

const numer = (rat) => car(rat);

const denom = (rat) => cdr(rat);

const toString = (rat) => `${numer(rat)} / ${denom(rat)}`

const isEqual = (rat1, rat2) => {
	if (numer(rat1) * denom(rat2) === numer(rat2) * denom(rat1)) {
		return true;
	} else return false;
}; 

const add = (rat1, rat2) => {
	var a = ((numer(rat1) * denom(rat2)) + (denom(rat1) * numer(rat2)));
	var b = (denom(rat1) * denom(rat2));
	return make (a, b);
};

const sub = (rat1, rat2) => {
	var a = ((numer(rat1) * denom(rat2)) - (denom(rat1) * numer(rat2)));
	var b = (denom(rat1) * denom(rat2));
	return make (a, b);
};
//a/b - c/d = (a * d - b * c) / (b * d)

const mul = (rat1, rat2) => {
  var a = (numer(rat1) * numer(rat2));
  var b = (denom(rat1) * denom(rat2));
  return make (a, b);
};

const div = (rat1, rat2) => {
	var a = (numer(rat1) * denom(rat2));
	var b = (denom(rat1) * numer(rat2));
	return make (a, b);
};

export { make, numer, denom, toString, isEqual, add, sub, mul, div };