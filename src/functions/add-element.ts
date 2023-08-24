import { BinarySearchTree, CompareFunction } from 'src/types';

/**
 * Adds a given node to the given binary search tree with the given compare function,
 * and returns a new tree, without modifing the original tree in place.
 *
 * @param tree The source binary search tree
 * @param compareFn The function used to determine the order of the elements (similar to Array.sort).
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
 * @param element The element to be added
 * @returns The new binary search tree
 */
export function addElement<T>(
    tree: BinarySearchTree<T>,
    compareFn: CompareFunction<T>,
    element: T
): BinarySearchTree<T> {
    if (tree.data === undefined) {
        return { data: element };
    }

    const comparison = compareFn(element, tree.data);

    if (comparison === 0) {
        return tree;
    }

    const direction = comparison < 0 ? 'left' : 'right';
    const subTree = tree[direction];

    return {
        ...tree,
        [direction] : subTree ? addElement(subTree, compareFn, element) : { data: element },
    };
}

/**
 * Creates an addElement function for the given binary search tree with the given compare function.
 *
 * @param compareFn The function used to determine the order of the elements.
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
 * @returns The bound addElement function
 */
export function makeAddElement<T>(compareFn: CompareFunction<T>) {
    return function (tree: BinarySearchTree<T>, element: T) {
        return addElement(tree, compareFn, element);
    };
}

/**
 * Adds the given elements to the given binary search tree with the given compare function,
 * and returns a new tree, without modifing the original tree in place.
 *
 * @param tree The source binary search tree
 * @param compareFn The function used to determine the order of the elements.
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
export function addElements<T>(
    tree: BinarySearchTree<T>,
    compareFn: CompareFunction<T>,
    elements: T[]
): BinarySearchTree<T> {
    return elements.reduce((acc, curr) => addElement(acc, compareFn, curr), tree);
}

/**
 * Creates an addElements function for the given binary search tree with the given compare function.
 *
 * @param compareFn The function used to determine the order of the elements.
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
 * @returns The bound addElements function
 */
export function makeAddElements<T>(compareFn: CompareFunction<T>) {
    return function (tree: BinarySearchTree<T>, elements: T[]) {
        return addElements(tree, compareFn, elements);
    };
}
