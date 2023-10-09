export function forEachBalanced<T>(
    cb: (element: T) => void,
    sortedElements: T[],
    range?: [number, number]
): void {
    const l = range?.[0] === undefined ? 0 : range[0],
          r = range?.[1] === undefined ? sortedElements.length - 1 : range[1]

    if (l > r) {
        return
    }

    const half = Math.ceil((l + r) / 2)

    cb(sortedElements[half])

    forEachBalanced(cb, sortedElements, [l, half - 1])

    forEachBalanced(cb, sortedElements, [half + 1, r])
}
