export function forEachBalanced<T>(cb: (element: T) => void, sortedElements: T[]): void {
    const length = sortedElements.length;
    const half = length / 2;

    const lefts = sortedElements.slice(0, Math.ceil(half - 0.5) + 1);
    const rights = sortedElements.slice(Math.floor(half));

    if (lefts.length > 0) {
        cb(lefts.pop() as T);
        forEachBalanced(cb, lefts);
    }
    if (rights.length > 0) {
        cb(rights.shift() as T);
        forEachBalanced(cb, rights);
    }
}
