import { traverseInOrderReverse } from 'src/functions/traverse-in-order-reverse';
import { makeToArrayFromTraversal } from 'src/helpers/make-to-array-from-traversal';

/**
 * Converts the given binary search tree to an array, with the elements sorted from right to left.
 *
 * @param tree The source binary search tree
 * @returns The array sorted from right to left.
 */
export const toArrayInOrderReverse = makeToArrayFromTraversal(traverseInOrderReverse);
