import { BinaryTree, BinaryTreeNode, CompareFunction } from 'src/types';

/**
 * Adds a given node to the given binary tree with the given compare function,
 * and returns a new tree, without modifing the original tree in place.
 *
 * @param tree The source binary tree
 * @param compareFn The function used to determine the order of the elements.
 *  Its first argument is the current element.
 *  Its second argument is the parent element.
 *  Its return value can be negative, zero or positive:
 *
 *  => Negative : the current element should be placed as min node of its parent
 *
 *  => Positive : the current element should be placed as max node of its parent
 *
 *  => Zero     : the current element should be placed as max node of its parent
 * @param element The node to be added
 * @returns The new binary tree
 */
export function addElement<T>(
    tree: BinaryTree<T>,
    compareFn: CompareFunction<T>,
    element: T
): BinaryTree<T> {
    if (!tree.data) {
        return { data: element } as BinaryTreeNode<T>;
    }

    const comparison = compareFn(element, tree.data);

    if (comparison === 0) {
        return tree;
    }

    const direction = comparison < 0 ? 'min' : 'max';
    const subTree = tree[direction];

    return {
        ...tree,
        [direction] : subTree ? addElement(subTree, compareFn, element) : { data: element },
    };
}

/**
 * Creates an addElement function for the given binary tree with the given compare function.
 *
 * @param compareFn The function used to determine the order of the elements.
 *  Its first argument is the current element.
 *  Its second argument is the parent element.
 *  Its return value can be negative, zero or positive:
 *
 *  => Negative : the current element should be placed as min node of its parent
 *
 *  => Positive : the current element should be placed as max node of its parent
 *
 *  => Zero     : the current element should be placed as max node of its parent
 *
 * @returns The bound addElement function
 */
export function makeAddElement<T>(compareFn: CompareFunction<T>) {
    return function (tree: BinaryTree<T>, element: T) {
        return addElement(tree, compareFn, element);
    };
}

/**
 * Adds the given elements to the given binary tree with the given compare function,
 * and returns a new tree, without modifing the original tree in place.
 *
 * @param tree The source binary tree
 * @param compareFn The function used to determine the order of the elements.
 *  Its first argument is the current element.
 *  Its second argument is the parent element.
 *  Its return value can be negative, zero or positive:
 *
 *  => Negative : the current element should be placed as min node of its parent
 *
 *  => Positive : the current element should be placed as max node of its parent
 *
 *  => Zero     : the current element should be placed as max node of its parent
 * @param nodes The nodes to be added
 * @returns The new binary tree
 */
export function addElements<T>(
    tree: BinaryTree<T>,
    compareFn: CompareFunction<T>,
    elements: T[]
): BinaryTree<T> {
    return elements.reduce((acc, curr) => addElement(acc, compareFn, curr), tree);
}

/**
 * Creates an addElements function for the given binary tree with the given compare function.
 *
 * @param compareFn The function used to determine the order of the elements.
 *  Its first argument is the current element.
 *  Its second argument is the parent element.
 *  Its return value can be negative, zero or positive:
 *
 *  => Negative : the current element should be placed as min node of its parent
 *
 *  => Positive : the current element should be placed as max node of its parent
 *
 *  => Zero     : the current element should be placed as max node of its parent
 *
 * @returns The bound addElements function
 */
export function makeAddElements<T>(compareFn: CompareFunction<T>) {
    return function (tree: BinaryTree<T>, elements: T[]) {
        return addElements(tree, compareFn, elements);
    };
}
