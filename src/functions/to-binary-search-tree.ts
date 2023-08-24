import { addElements } from 'src/functions/add-element';
import { BinarySearchTree, CompareFunction } from 'src/types';

/**
 * Converts the given array to a binary search tree, depending on a given compare function.
 *
 * @param elements The source array
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
 * @returns The elements of the elements array organized as a binary search tree.
 */
export function toBinarySearchTree<T>(
    elements: T[],
    compareFn: CompareFunction<T>
): BinarySearchTree<T> {
    return addElements({}, compareFn, elements);
}
