import { makeCollectElements } from 'src/functions/helpers/collect-nodes';
import { traverseInOrder } from 'src/functions/traverse-in-order';
import { BinarySearchTree } from 'src/types';

/**
 * Converts the given binary search tree to an array, with the elements sorted from left to right.
 *
 * @param tree The source binary search tree
 * @returns The array sorted from left to right.
 */
export function toArrayInOrder<T>(tree?: BinarySearchTree<T>) {
    const elements: T[] = [];
    const collectElements = makeCollectElements(elements);

    traverseInOrder(collectElements, tree);

    return elements;
}
