import { isBranch } from 'src/functions/is-branch';
import { BinaryTree, BinaryTreeNode, CompareFunction } from 'src/types';

/**
 * Finds a given element into the given binary tree with the given compare function.
 *
 * @param tree The source binary tree
 * @param compareFn The function used to determine the order of the elements.
 *  Its first argument is the current element.
 *  Its second argument is the parent element.
 *  Its return value can be negative, zero or positive:
 *
 *  => Negative : the current element should be found as min node of its parent
 *
 *  => Positive : the current element should be found as max node of its parent
 *
 *  => Zero     : the current element should be found as max node of its parent
 * @param element The element to be found
 * @returns The new binary tree
 */
export function findNode<T>(
    tree: BinaryTree<T>,
    compareFn: CompareFunction<T>,
    element: T
): BinaryTree<T> | undefined {
    if (tree.data === element) {
        return tree;
    }

    if (!isBranch(tree)) {
        return undefined;
    }

    const comparison = compareFn(element, tree.data);
    const direction = comparison < 0 ? 'min' : 'max';
    const subTree = tree[direction] as BinaryTreeNode<T>;

    return findNode(subTree, compareFn, element);
}

/**
 * Creates an findNode function for the given binary tree with the given compare function.
 *
 * @param tree The source binary tree
 * @param compareFn The function used to determine the order of the elements.
 *  Its first argument is the current element.
 *  Its second argument is the parent element.
 *  Its return value can be negative, zero or positive:
 *
 *  => Negative : the current element should be found as min node of its parent
 *
 *  => Positive : the current element should be found as max node of its parent
 *
 *  => Zero     : the current element should be found as max node of its parent
 *
 * @returns The bound findNode function
 */
export function makeFindNode<T>(tree: BinaryTree<T>, compareFn: CompareFunction<T>) {
    return function (element: T) {
        return findNode(tree, compareFn, element);
    };
}
