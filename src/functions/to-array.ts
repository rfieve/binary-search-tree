import { traverseInOrder, traverseInOrderReverse } from 'src/functions/traverse-in-order';
import { traverseTopDown, traverseTopDownReverse } from 'src/functions/traverse-top-down';
import { makeToArrayFromTraversal } from 'src/helpers/make-to-array-from-traversal';

/**
 * Converts the given binary search tree to an array, with the elements sorted from left to right.
 *
 * @param tree The source binary search tree
 * @returns The array sorted from left to right.
 */
export const toArrayInOrder = makeToArrayFromTraversal(traverseInOrder);

/**
 * Converts the given binary search tree to an array, with the elements sorted from right to left.
 *
 * @param tree The source binary search tree
 * @returns The array sorted from right to left.
 */
export const toArrayInOrderReverse = makeToArrayFromTraversal(traverseInOrderReverse);

/**
 * Converts the given binary search tree to an array, with the elements sorted from top to bottom, left to right.
 *
 * @param tree The source binary search tree
 * @returns The array sorted from top to bottom, left to right.
 */
export const toArrayTopDown = makeToArrayFromTraversal(traverseTopDown);

/**
 * Converts the given binary search tree to an array, with the elements sorted from top to bottom, right to left.
 *
 * @param tree The source binary search tree
 * @returns The array sorted from top to bottom, right to left.
 */
export const toArrayTopDownReverse = makeToArrayFromTraversal(traverseTopDownReverse);
