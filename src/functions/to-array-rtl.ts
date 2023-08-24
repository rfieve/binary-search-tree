import { makeCollectElements } from 'src/functions/helpers/collect-nodes';
import { traverseRTL } from 'src/functions/traverse-rtl';
import { BinarySearchTree } from 'src/types';

/**
 * Converts the given binary search tree to an array, with the elements sorted from right to left.
 *
 * @param tree The source binary search tree
 * @returns The array sorted from right to left.
 */
export function toArrayRTL<T>(tree?: BinarySearchTree<T>) {
    const elements: T[] = [];
    const collectElements = makeCollectElements(elements);

    traverseRTL(collectElements, tree);

    return elements;
}
