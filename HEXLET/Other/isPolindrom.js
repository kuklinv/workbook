const length = str => str.length;
const substr = (str, start, size) => str.substr(start, size);

const isPolindrome = (input) => {
  const strt = 0;
  const fin = length(input);
  if (fin < 2) { 
	return true;
  }
  if (substr(input, strt, 1) !== substr(input, fin - 1, 1)) {
    return false;
  } else {
    const result = isPolindrome (substr(input, strt + 1, fin - 2));
    return result;
  }
};

export default isPolindrome;

//isPolindrome('radar');