import { increment, getCount } from "./counter";
import { updateCache } from "./counterCache";

const button = document.createElement('button');
document.body.appendChild(button);
const previousElement = document.getElementById('previous');
const currentElement = document.getElementById('current');
const totalElement = document.getElementById('total');

button.innerText = 'Click me';

button.addEventListener("click", () => {
    increment();
    previousElement.innerText = countCache.previousCount;
    currentElement.innerText = countCache.currentCount;
    totalElement.innerText = countCache.total();
});

