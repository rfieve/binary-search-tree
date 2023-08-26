import { traverseTopDownReverse } from 'src/functions/traverse-top-down-reverse';
import { makeToArrayWithTraversal } from 'src/helpers/make-to-array-with-traversal';
import { BST } from 'src/types';

/**
 * Converts the given binary search tree to an array, with the elements sorted from top to bottom, right to left.
 *
 * @param tree The source binary search tree
 * @returns The array sorted from top to bottom, right to left.
 */
export function toArrayTopDownReverse<T>(tree?: BST<T>) {
    return makeToArrayWithTraversal(traverseTopDownReverse)(tree);
}
