import { BST, CompareFunction } from 'src/types';

function addElement<T>(tree: BST<T>, compare: CompareFunction<T>, element: T): BST<T> {
    if (tree.data === undefined) {
        return { data: element };
    }

    const comparison = compare(element, tree.data);

    if (comparison === 0) {
        return tree;
    }

    const direction = comparison < 0 ? 'left' : 'right';
    const subTree = tree[direction];

    return {
        ...tree,
        [direction] : subTree ? addElement(subTree, compare, element) : { data: element },
    };
}

function addElements<T>(tree: BST<T>, compare: CompareFunction<T>, elements: T[]): BST<T> {
    return elements.reduce((acc, curr) => addElement(acc, compare, curr), tree);
}

/**
 * Adds the given elements to the given binary search tree with the given compare function,
 * and returns a new tree, without modifing the original tree in place.
 *
 * @param tree The source binary search tree
 * @param compare The function used to determine the order of the elements.
 *  Its first argument is the current element.
 *  Its second argument is the parent element.
 *  Its return value can be negative, zero or positive:
 *
 *  => Negative : the current element should be placed as left node of its parent
 *
 *  => Positive : the current element should be placed as right node of its parent
 *
 *  => Zero     : the current element should not be placed in the tree
 *
 * @param nodes The nodes to be added
 * @returns The new binary search tree
 */
export function add<T>(tree: BST<T>, compare: CompareFunction<T>, elements: T | T[]): BST<T> {
    return Array.isArray(elements)
        ? addElements(tree, compare, elements)
        : addElement(tree, compare, elements);
}

/**
 * Creates an add function for the given binary search tree with the given compare function.
 *
 * @param compare The function used to determine the order of the elements.
 *  Its first argument is the current element.
 *  Its second argument is the parent element.
 *  Its return value can be negative, zero or positive:
 *
 *  => Negative : the current element should be placed as left node of its parent
 *
 *  => Positive : the current element should be placed as right node of its parent
 *
 *  => Zero     : the current element should not be placed in the tree
 *
 * @returns The bound add function
 */
export function makeAdd<T>(compare: CompareFunction<T>) {
    return function (tree: BST<T>, elements: T | T[]) {
        return add(tree, compare, elements);
    };
}
