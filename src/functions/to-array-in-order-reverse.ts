import { makeCollectElements } from 'src/functions/helpers/collect-nodes';
import { traverseInOrderReverse } from 'src/functions/traverse-in-order-reverse';
import { BinarySearchTree } from 'src/types';

/**
 * Converts the given binary search tree to an array, with the elements sorted from right to left.
 *
 * @param tree The source binary search tree
 * @returns The array sorted from right to left.
 */
export function toArrayInOrderReverse<T>(tree?: BinarySearchTree<T>) {
    const elements: T[] = [];
    const collectElements = makeCollectElements(elements);

    traverseInOrderReverse(collectElements, tree);

    return elements;
}
