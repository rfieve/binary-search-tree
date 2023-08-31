// export function forEachBalanced<T>(cb: (element: T) => void, sortedElements: T[]): void {
//     const length = sortedElements.length;
//     const half = length / 2;

//     const lefts = sortedElements.slice(0, Math.ceil(half - 0.5) + 1);
//     const rights = sortedElements.slice(Math.floor(half));

//     if (lefts.length > 0) {
//         cb(lefts.pop() as T);
//         forEachBalanced(cb, lefts);
//     }
//     if (rights.length > 0) {
//         cb(rights.shift() as T);
//         forEachBalanced(cb, rights);
//     }
// }

// [1, 2, 3, 4, 5, 6, 7] => 3
// [1, 2, 3, 4, 5, 6] => 3

export function forEachBalanced<T>(
    cb: (element: T) => void,
    sortedElements: T[],
    range?: [number, number]
): void {
    const l = range?.[0] === undefined ? 0 : range[0];
    const r = range?.[1] === undefined ? sortedElements.length - 1 : range[1];

    if (l > r) {
        return;
    }

    const half = Math.ceil((l + r) / 2);

    cb(sortedElements[half]);

    forEachBalanced(cb, sortedElements, [l, half - 1]);

    forEachBalanced(cb, sortedElements, [half + 1, r]);
}
