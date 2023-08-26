import { traverseTopDown } from 'src/functions/traverse-top-down';
import { makeToArrayWithTraversal } from 'src/helpers/make-to-array-with-traversal';
import { BST } from 'src/types';

/**
 * Converts the given binary search tree to an array, with the elements sorted from top to bottom, left to right.
 *
 * @param tree The source binary search tree
 * @returns The array sorted from top to bottom, left to right.
 */
export function toArrayTopDown<T>(tree?: BST<T>) {
    return makeToArrayWithTraversal(traverseTopDown)(tree);
}
