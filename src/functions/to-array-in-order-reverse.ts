import { makeCollectElementFromNode } from 'src/functions/helpers/collect';
import { traverseInOrderReverse } from 'src/functions/traverse-in-order-reverse';
import { BST } from 'src/types';

/**
 * Converts the given binary search tree to an array, with the elements sorted from right to left.
 *
 * @param tree The source binary search tree
 * @returns The array sorted from right to left.
 */
export function toArrayInOrderReverse<T>(tree?: BST<T>) {
    const elements: T[] = [];
    const collectElementFromNode = makeCollectElementFromNode(elements);

    traverseInOrderReverse(collectElementFromNode, tree);

    return elements;
}
