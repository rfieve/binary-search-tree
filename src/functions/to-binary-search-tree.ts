import { makeCollectElement } from '../helpers/collect';
import { forEachBalanced } from '../helpers/for-each-balanced';
import { BinarySearchTreeOptions, BST, CompareFunction } from '../types';
import { add } from './add';

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
export function toBST<T>(
    elements: T[],
    compare: CompareFunction<T>,
    { isBalanced, isPresorted } = {
        isBalanced  : true,
        isPresorted : false,
    } as BinarySearchTreeOptions
): BST<T> {
    if (!isBalanced) {
        return add({}, compare, elements);
    }

    const sortedElements = isPresorted ? elements : elements.slice().sort(compare);
    const balancedElements: T[] = [];

    const collectElement = makeCollectElement(balancedElements);

    forEachBalanced(collectElement, sortedElements);

    return add({}, compare, balancedElements);
}

export function makeToBST<T>(compare: CompareFunction<T>) {
    return function (elements: T[], options: BinarySearchTreeOptions) {
        return toBST(elements, compare, options);
    };
}
