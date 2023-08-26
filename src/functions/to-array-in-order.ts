import { traverseInOrder } from 'src/functions/traverse-in-order';
import { makeToArrayWithTraversal } from 'src/helpers/make-to-array-with-traversal';

/**
 * Converts the given binary search tree to an array, with the elements sorted from left to right.
 *
 * @param tree The source binary search tree
 * @returns The array sorted from left to right.
 */
export const toArrayInOrder = makeToArrayWithTraversal(traverseInOrder);
