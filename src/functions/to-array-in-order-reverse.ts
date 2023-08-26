import { traverseInOrderReverse } from 'src/functions/traverse-in-order-reverse';
import { makeToArrayWithTraversal } from 'src/helpers/make-to-array-with-traversal';
import { BST } from 'src/types';

/**
 * Converts the given binary search tree to an array, with the elements sorted from right to left.
 *
 * @param tree The source binary search tree
 * @returns The array sorted from right to left.
 */
export function toArrayInOrderReverse<T>(tree?: BST<T>) {
    return makeToArrayWithTraversal(traverseInOrderReverse)(tree);
}
