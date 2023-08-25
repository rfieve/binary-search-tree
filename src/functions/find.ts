import { BST, CompareFunction } from 'src/types';

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
 * @returns The new binary search tree
 */
export function find<T>(tree: BST<T>, compare: CompareFunction<T>, element: T): BST<T> | undefined {
    if (tree.data === undefined) {
        return undefined;
    }

    const comparison = compare(element, tree.data);

    if (comparison === 0) {
        return tree;
    }

    const direction = comparison < 0 ? 'left' : 'right';
    const subTree = tree[direction];

    return subTree ? find(subTree, compare, element) : undefined;
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
