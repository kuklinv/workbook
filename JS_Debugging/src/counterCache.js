export const countCache = {
    previousCount: 0, 
    currentCount: 0, 
    totalCount: 0 
}

export function updateCache(currentCount, previousCount) {
    countCache.previousCount = previousCount;
    countCache.currentCount = currentCount;
    countCache.totalCount = (countCache.totalCount || 0) + currentCount;
}

