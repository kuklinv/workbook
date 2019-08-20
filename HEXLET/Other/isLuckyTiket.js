// my design
const length = str => str.length;
const isHappyTicket = (num) => {
    const typeNum = typeof num;
    if (typeNum === 'number') {
        num = String(num);
    }
    if (length(num) % 2 !== 0) {
        return false;
    }
    let pt1 = 0;
    let pt2 = 0;
    for (let i = 0; i < (length(num) / 2); i += 1) {
        pt1 += Number(num[i]);
    }
    for (let i = (length(num) / 2); i < length(num); i += 1) {
        pt2 += Number(num[i]);
    }
    return pt1 === pt2 ? true : false;
};
isHappyTicket('060006');

// other design for my exchange and learning
// 1
function isLucky(ticket) {
    if (ticket.length !== 6) {
        return false;
    }
    if ((Number(ticket[0]) + Number(ticket[1]) + Number(ticket[2])) === (Number(ticket[3]) + Number(ticket[4]) + Number(ticket[5]))) {
        return true;
    } else {
        return false;
    }
}

// 2
function isLucky(ticket) {
    return (/^\d{6}$/).test(ticket) ?
        ticket.slice(0, 3).split('').reduce((sum, e) => sum + +e, 0) === ticket.slice(3, 6).split('').reduce((sum, e) => sum + +e, 0) :
        false
}

//3

function isLucky(s) {
    return /^[0-9]{6}$/.test(s) && s.slice(0, 3).split("").reduce((s, n) => s + +n, 0) === s.slice(3).split("").reduce((s, n) => s + +n, 0);
}

//4

const isLucky = s => /^\d{6}$/.test(s) && ![].reduce.call(s, (a, c, i) => a + (i < 3 ? +1 : -1) * c, 0);

// 5

function isLucky(ticket) {
    if (ticket.length !== 6) return false

    const left = ticket.slice(0, 3)
    const right = ticket.slice(-3)

    function sumOfDigits(d) {
        return d.split('').reduce((a, b) => a + +b, 0)
    }
    return sumOfDigits(left) === sumOfDigits(right)
}

// enaf