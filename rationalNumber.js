const make = (numer, denom) => cons(numer, denom);

const numer = (rat) => car(rat);

const denom = (rat) => cdr(rat);

const toString = (rat) => `${numer(rat)} / ${denom(rat)}`

const isEqual = (rat1, rat2) => {
	if (numer(rat1) * denom(rat2) === numer(rat2) * denom(rat1)) {
		return true;
	} else return false;
}; 

const add = a/b + c/d = (a * d + b * c) / (b * d)

const sub = a/b - c/d = (a * d - b * c) / (b * d)

const mul = a/b * c/d = (a * c) / (b * d)

const div = a/b / c/d = (a * d) / (b * c)

export { make, numer, denom, toString, isEqual, add, sub, mul, div };