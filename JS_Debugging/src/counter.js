import { updateCache } from './counterCache.js';
let count = 0;
export function incrementCounter() {
    const previousCount = count;
    count += 1;
    updateCache(count, previousCount);
}
/*  
export function getCount() {
    return count;
}
*/
