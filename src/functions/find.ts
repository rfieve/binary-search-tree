import { BST, CompareFunction, Direction, FoundResult } from '../types';

/**
 * Finds a given element into the given binary search tree with the given compare function.
 * @param tree The source binary search tree
 * @param compare The compare function
 * @param element The element to be found
 * @returns The found result.
 */
export function find<T>(
    tree: BST<T>,
    compare: CompareFunction<T>,
    element: T,
    path = [] as Direction[]
): FoundResult<T> | undefined {
    if (tree.data.length === 0) {
        return undefined;
    }

    const comparison = compare(element, tree.data[0]);

    if (comparison === 0) {
        return { node: tree, path };
    }

    const direction = comparison < 0 ? Direction.Left : Direction.Right;
    const subTree = tree[direction];
    const newPath = path.slice().concat(direction);

    return subTree ? find(subTree, compare, element, newPath) : undefined;
}

/**
 * Creates an find function for the given binary search tree with the given compare function.
 * @param compare The compare function
 * @returns The bound find function
 */
export function makeFind<T>(compare: CompareFunction<T>) {
    return function (tree: BST<T>, element: T) {
        return find(tree, compare, element);
    };
}
