import { traverseTopDown } from 'src/functions/traverse-top-down';
import { makeToArrayFromTraversal } from 'src/helpers/make-to-array-from-traversal';

/**
 * Converts the given binary search tree to an array, with the elements sorted from top to bottom, left to right.
 *
 * @param tree The source binary search tree
 * @returns The array sorted from top to bottom, left to right.
 */
export const toArrayTopDown = makeToArrayFromTraversal(traverseTopDown);
