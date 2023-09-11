import { makeCollectElement } from '../helpers/collect';
import { forEachBalanced } from '../helpers/for-each-balanced';
import { BinarySearchTreeOptions, BST, CompareFunction } from '../types';
import { add } from './add';

/**
 * Converts the given array to a binary search tree, depending on a given compare function.
 * @param elements The source array
 * @param {CompareFunction} compare
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
        return add({ data: [] }, compare, elements);
    }

    const sortedElements = isPresorted ? elements : elements.slice().sort(compare);
    const balancedElements: T[] = [];

    const collectElement = makeCollectElement(balancedElements);

    forEachBalanced(collectElement, sortedElements);

    return add({ data: [] }, compare, balancedElements);
}

/**
 * Creates an toBST function for the given compare function.
 * @param {CompareFunction} compare
 * @returns The bound toBST function
 */
export function makeToBST<T>(compare: CompareFunction<T>) {
    return function (elements: T[], options?: BinarySearchTreeOptions) {
        return toBST(elements, compare, options);
    };
}
