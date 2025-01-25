import { incrementCounter, getCount } from "./counter";
import { countCache } from "./counterCache";

const span = document.createElement('span');
document.body.appendChild(span);
span.style.margin = '0 auto';
span.style.display = 'block';
span.style.width = '80%';
span.style.height = '50px';


const button = document.createElement('button');
document.body.appendChild(button);
const previousElement = document.getElementById('previous');
const currentElement = document.getElementById('current');
const totalElement = document.getElementById('total');

button.innerText = 'Click me';
button.style.margin = '0 auto';
button.style.display = 'block';

button.addEventListener("click", () => {
    incrementCounter();
    previousElement.innerText = countCache.previousCount;
    currentElement.innerText = countCache.currentCount;
    totalElement.innerText = countCache.totalCount;
});

