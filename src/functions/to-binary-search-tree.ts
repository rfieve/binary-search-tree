import { add } from 'src/functions/add';
import { makeCollectElement } from 'src/functions/helpers/collect';
import { loopAsBalanced } from 'src/functions/helpers/loop-as-balanced';
import { BST, CompareFunction } from 'src/types';

/**
 * Converts the given array to a binary search tree, depending on a given compare function.
 *
 * @param elements The source array
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
 * @returns The elements of the elements array organized as a binary search tree.
 */
export function toBST<T>(elements: T[], compare: CompareFunction<T>): BST<T> {
    return add({}, compare, elements);
}

/**
 * Converts the given array to a balanced binary search tree, depending on a given compare function.
 *
 * @param elements The source array
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
 * @returns The elements of the elements array organized as a binary search tree.
 */
export function toBalancedBST<T>(
    elements: T[],
    compare: CompareFunction<T>,
    isPresorted?: boolean
): BST<T> {
    const sortedElements = isPresorted ? elements : elements.slice().sort(compare);
    const balancedElements: T[] = [];

    const collectElement = makeCollectElement(balancedElements);

    loopAsBalanced(collectElement, sortedElements);

    return add({}, compare, balancedElements);
}
