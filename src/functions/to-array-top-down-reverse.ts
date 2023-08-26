import { traverseTopDownReverse } from 'src/functions/traverse-top-down-reverse';
import { makeToArrayWithTraversal } from 'src/helpers/make-to-array-with-traversal';

/**
 * Converts the given binary search tree to an array, with the elements sorted from top to bottom, right to left.
 *
 * @param tree The source binary search tree
 * @returns The array sorted from top to bottom, right to left.
 */
export const toArrayTopDownReverse = makeToArrayWithTraversal(traverseTopDownReverse);
