function isPrime (num) {
    if (num <= 1) {return false;}
    const iter = (counter, prime) => {
        if (counter === num) {
            return true;
        }
        if (prime % counter === 0) {
            return false;
        }
        return iter(counter + 1, prime);
    };
    return iter(2, num);
};

function result(x1, y1, x2, y2) {
    let print = '';
    for (let i = x1; i <= y1; i += 1) {
        if (isPrime(i)) {
            print += i.toString() + ' ';
        }
    }
    console.log(print.slice(0, -1));
}

result(99, 140);