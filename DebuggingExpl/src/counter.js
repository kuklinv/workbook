import { updateCache } from "./counterCache";

let count = 0;
export function increment() {
    count++;
    updateCache(count, count - 1);
}

export function getCount() {
    return count;
}

