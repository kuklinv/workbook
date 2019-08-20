const isPrime = (num) => {
if (num <= 1) {return false;}
    const iter = (counter, prime) => {
      if (counter === num) {
        return true;
        }
      if (prime % counter === 0) {
          return false;
      }
    return iter(counter + 1, prime);
    }
    return iter(2, num);
};
