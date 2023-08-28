import { BST, CompareFunction, Direction } from 'src/types';

/**
 * Finds a given element into the given binary search tree with the given compare function.
 *
 * @param tree The source binary search tree
 * @param compare The function used to determine the order of the elements.
 *  Its first argument is the current element.
 *  Its second argument is the parent element.
 *  Its return value can be negative, zero or positive:
 *
 *  => Negative : the current element should be found as left node of its parent
 *
 *  => Positive : the current element should be found as right node of its parent
 *
 *  => Zero     : the current element is similar to the searched node
 *
 * @param element The element to be found
 * @returns The found result. { node: the found node, path:; the path to access it}
 */
export function find<T>(
    tree: BST<T>,
    compare: CompareFunction<T>,
    element: T,
    path = [] as Direction[]
): { node: BST<T> | undefined; path: Direction[] } {
    if (tree.data === undefined) {
        return { node: undefined, path };
    }

    const comparison = compare(element, tree.data);

    if (comparison === 0) {
        return { node: tree, path };
    }

    const direction = comparison < 0 ? Direction.Left : Direction.Right;
    const subTree = tree[direction];
    const newPath = path.slice().concat(direction);

    return subTree ? find(subTree, compare, element, newPath) : { node: undefined, path: newPath };
}

/**
 * Creates an find function for the given binary search tree with the given compare function.
 *
 * @param compare The function used to determine the order of the elements.
 *  Its first argument is the current element.
 *  Its second argument is the parent element.
 *  Its return value can be negative, zero or positive:
 *
 *  => Negative : the current element should be found as left node of its parent
 *
 *  => Positive : the current element should be found as right node of its parent
 *
 *  => Zero     : the current element is similar to the searched node
 *
 * @returns The bound find function
 */
export function makeFind<T>(compare: CompareFunction<T>) {
    return function (tree: BST<T>, element: T) {
        return find(tree, compare, element);
    };
}
